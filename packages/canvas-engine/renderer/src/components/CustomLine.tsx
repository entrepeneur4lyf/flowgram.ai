import React from 'react';

import type { FlowTransitionLine } from '@flowgram.ai/document';

import { type FlowRendererRegistry } from '../flow-renderer-registry';

interface PropsType extends FlowTransitionLine {
  rendererRegistry: FlowRendererRegistry;
}

function CustomLine(props: PropsType): JSX.Element {
  const { renderKey, rendererRegistry, ...line } = props;

  if (!renderKey) {
    return <></>;
  }

  const renderer = rendererRegistry.getRendererComponent(renderKey);

  if (!renderer) {
    return <></>;
  }

  const Component = renderer.renderer as (props: FlowTransitionLine) => JSX.Element;

  return <Component {...line} />;
}

export default CustomLine;
