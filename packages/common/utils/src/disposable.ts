import { Emitter, type Event } from './event';

/**
 * An object that performs a cleanup operation when `.dispose()` is called.
 *
 * Some examples of how disposables are used:
 *
 * - An event listener that removes itself when `.dispose()` is called.
 * - The return value from registering a provider. When `.dispose()` is called, the provider is unregistered.
 */
export interface Disposable {
  dispose(): void;
}

export namespace Disposable {
  export function is(thing: any): thing is Disposable {
    return (
      typeof thing === 'object' &&
      thing !== null &&
      typeof (<Disposable>(<any>thing)).dispose === 'function'
    );
  }

  export function create(func: () => void): Disposable {
    return {
      dispose: func,
    };
  }

  export const NULL = Object.freeze(create(() => {}));
}

export class DisposableImpl implements Disposable {
  readonly toDispose = new DisposableCollection();

  dispose(): void {
    this.toDispose.dispose();
  }

  get disposed(): boolean {
    return this.toDispose.disposed;
  }

  get onDispose(): Event<void> {
    return this.toDispose.onDispose;
  }
}

export class DisposableCollection implements Disposable {
  protected readonly disposables: (Disposable & { _origin: Disposable })[] = [];

  protected readonly onDisposeEmitter = new Emitter<void>();

  private _disposed = false;

  constructor(...toDispose: Disposable[]) {
    toDispose.forEach((d) => this.push(d));
  }

  get onDispose(): Event<void> {
    return this.onDisposeEmitter.event;
  }

  get disposed(): boolean {
    return this._disposed;
  }

  dispose(): void {
    if (this.disposed) {
      return;
    }
    this._disposed = true;
    this.disposables
      .slice()
      .reverse()
      .forEach((disposable) => {
        try {
          disposable.dispose();
        } catch (e) {
          console.error(e);
        }
      });
    this.onDisposeEmitter.fire(undefined);
    this.onDisposeEmitter.dispose();
  }

  push(disposable: Disposable): Disposable {
    if (this.disposed) return Disposable.NULL;
    const { disposables } = this;
    if (disposables.find((d) => d._origin === disposable)) {
      return Disposable.NULL;
    }
    let disposableWrap: Disposable & { _origin: Disposable };
    const toRemove = Disposable.create(() => {
      const index = disposables.indexOf(disposableWrap);
      if (index !== -1) {
        disposables.splice(index, 1);
      }
    });
    disposableWrap = {
      dispose: () => {
        toRemove.dispose();
        disposable.dispose();
      },
      _origin: disposable,
    };
    disposables.push(disposableWrap);
    return toRemove;
  }

  pushAll(disposables: Disposable[]): Disposable[] {
    return disposables.map((disposable) => this.push(disposable));
  }
}
