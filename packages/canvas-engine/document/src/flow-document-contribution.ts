import { type FlowDocument } from './flow-document';

export const FlowDocumentContribution = Symbol('FlowDocumentContribution');

export interface FlowDocumentContribution<T extends FlowDocument = FlowDocument> {
  /**
   * 注册
   * @param document
   */
  registerDocument?(document: T): void;

  /**
   * 加载数据
   * @param document
   */
  loadDocument?(document: T): Promise<void>;
}
