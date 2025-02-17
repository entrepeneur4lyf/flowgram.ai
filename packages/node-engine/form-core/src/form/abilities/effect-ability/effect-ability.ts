import { FormItemAbility } from '../../models/form-item-ability';

export class EffectAbility implements FormItemAbility {
  static readonly type = 'effect';

  get type(): string {
    return EffectAbility.type;
  }
}
