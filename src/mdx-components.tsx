import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import * as AccordionComponents from 'fumadocs-ui/components/accordion';
import { Callout } from 'fumadocs-ui/components/callout';
import Link from 'next/link';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { TerminalPlayer } from '@/components/terminal-player';
import { OSTabs } from '@/components/os-tabs';
import type { StaticImageData } from 'next/image';
import type { MDXComponents } from 'mdx/types';
import type { ReactNode } from 'react';

function DraftNotice({
  title = '注意',
  children,
}: {
  title?: string;
  children?: ReactNode;
}) {
  return (
    <Callout type="warn" title={title}>
      {/** 如果调用时传入 children 则使用之，否则渲染含链接的默认提示 */}
      {children ?? (
        <>
          本文尚处于草稿状态，内容可能不完整或存在错误，如有疑问，欢迎{' '}
          <Link href="/about">联系天明</Link>
          {' '}改进！
        </>
      ) }
    </Callout>
  );
}

function isStaticImageData(value: unknown): value is StaticImageData {
  return (
    typeof value === 'object' &&
    value !== null &&
    'src' in value &&
    typeof (value as { src: unknown }).src === 'string'
  );
}

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    DraftNotice,
	TerminalPlayer,
    pre: ({ ref: _ref, ...props }) => <CodeBlock {...props}><Pre>{props.children}</Pre></CodeBlock>,
    img: ({ src, ...props }) => {
      const isSupportedSrc =
        typeof src === 'string' ||
        typeof src === 'undefined' ||
        isStaticImageData(src);

      if (!isSupportedSrc) return null;

      return <ImageZoom {...props} src={src} />;
    },
    ...AccordionComponents,
    ...TabsComponents,
    OSTabs,
    ...components,
  };
}
