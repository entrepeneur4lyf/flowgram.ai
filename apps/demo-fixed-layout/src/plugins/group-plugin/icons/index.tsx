import { type ReactNode, type Ref, forwardRef } from 'react';

import Icon, { type IconProps } from '@douyinfe/semi-icons';

const SvgGroup = () => (
  <svg
    className="icon"
    width="16px"
    height="16px"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M341.333333 341.333333v170.666667h213.333334V341.333333H341.333333M42.666667 42.666667h170.666666v42.666666h597.333334V42.666667h170.666666v170.666666h-42.666666v597.333334h42.666666v170.666666h-170.666666v-42.666666H213.333333v42.666666H42.666667v-170.666666h42.666666V213.333333H42.666667V42.666667m170.666666 768v42.666666h597.333334v-42.666666h42.666666V213.333333h-42.666666V170.666667H213.333333v42.666666H170.666667v597.333334h42.666666M256 256h384v170.666667h128v341.333333H341.333333v-170.666667H256V256m384 341.333333h-213.333333v85.333334h256v-170.666667h-42.666667v85.333333z" />
  </svg>
);

const SvgUngroup = () => (
  <svg
    className="icon"
    width="16px"
    height="16px"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M85.333333 85.333333 256 85.333333 256 128 554.666667 128 554.666667 85.333333 725.333333 85.333333 725.333333 256 682.666667 256 682.666667 384 768 384 768 341.333333 938.666667 341.333333 938.666667 512 896 512 896 768 938.666667 768 938.666667 938.666667 768 938.666667 768 896 512 896 512 938.666667 341.333333 938.666667 341.333333 768 384 768 384 682.666667 256 682.666667 256 725.333333 85.333333 725.333333 85.333333 554.666667 128 554.666667 128 256 85.333333 256 85.333333 85.333333M768 512 768 469.333333 682.666667 469.333333 682.666667 554.666667 725.333333 554.666667 725.333333 725.333333 554.666667 725.333333 554.666667 682.666667 469.333333 682.666667 469.333333 768 512 768 512 810.666667 768 810.666667 768 768 810.666667 768 810.666667 512 768 512M554.666667 256 554.666667 213.333333 256 213.333333 256 256 213.333333 256 213.333333 554.666667 256 554.666667 256 597.333333 384 597.333333 384 512 341.333333 512 341.333333 341.333333 512 341.333333 512 384 597.333333 384 597.333333 256 554.666667 256M512 512 469.333333 512 469.333333 597.333333 554.666667 597.333333 554.666667 554.666667 597.333333 554.666667 597.333333 469.333333 512 469.333333 512 512Z" />
  </svg>
);

const IconFactory = (svg: ReactNode) =>
  forwardRef((props: Omit<IconProps, 'svg' | 'ref'>, ref: Ref<HTMLSpanElement>) => (
    <Icon svg={svg} {...props} ref={ref} />
  ));

export const IconGroupOutlined: any = IconFactory(<SvgGroup />);
export const IconUngroupOutlined: any = IconFactory(<SvgUngroup />);
