module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties', 'stylelint-scss'],
  rules: {
    indentation: 2,
    'no-missing-end-of-source-newline': [true, { severity: 'warning' }],
    'block-opening-brace-space-before': ['always', { severity: 'warning' }],
    'declaration-colon-space-after': ['always', { severity: 'warning' }],
    'declaration-colon-space-before': ['never', { severity: 'warning' }],
    'max-line-length': [120, { severity: 'warning' }],
    'selector-list-comma-newline-after': ['always', { severity: 'warning' }],
    'selector-combinator-space-before': ['always', { severity: 'warning' }],
    'selector-combinator-space-after': ['always', { severity: 'warning' }],
    'selector-attribute-quotes': ['always', { severity: 'warning' }],
    'block-opening-brace-newline-after': ['always', { severity: 'warning' }],
    'selector-no-qualifying-type': [true, { severity: 'warning' }],
    'shorthand-property-no-redundant-values': [true, { severity: 'warning' }],
    'declaration-no-important': [true, { severity: 'warning' }],
    'string-quotes': ['double', { severity: 'warning' }],
    'number-leading-zero': ['never', { severity: 'warning' }],
    'function-url-quotes': ['never', { severity: 'warning' }],
    'length-zero-no-unit': [true, { severity: 'warning' }],
    'color-hex-length': ['short', { severity: 'warning' }],
    'color-hex-case': ['lower', { severity: 'warning' }],
    'color-named': ['never', { severity: 'warning' }],
    'font-weight-notation': ['numeric', { severity: 'warning' }],
    'font-family-name-quotes': ['always-unless-keyword', { severity: 'warning' }],
    'media-feature-range-operator-space-before': ['always', { severity: 'warning' }],
    'media-feature-range-operator-space-after': ['always', { severity: 'warning' }],
    'media-feature-colon-space-before': ['never', { severity: 'warning' }],
    'media-feature-colon-space-after': ['always', { severity: 'warning' }],
    'no-duplicate-selectors': [true, { severity: 'warning' }],
    'rule-empty-line-before': ['always', { severity: 'warning' }],
    'selector-attribute-operator-space-before': ['never', { severity: 'warning' }],
    'selector-attribute-operator-space-after': ['never', { severity: 'warning' }],
    'declaration-block-trailing-semicolon': ['always', { severity: 'warning' }],
    'selector-attribute-brackets-space-inside': ['never', { severity: 'warning' }],
    'comment-whitespace-inside': ['always', { severity: 'warning' }],
    'comment-empty-line-before': ['always', { severity: 'warning' }],
    'selector-pseudo-class-parentheses-space-inside': ['never', { severity: 'warning' }],
    'media-feature-parentheses-space-inside': ['never', { severity: 'warning' }],
    'function-calc-no-unspaced-operator': [true, { severity: 'warning' }],
    'declaration-block-semicolon-newline-after': ['always', { severity: 'warning' }],
    'declaration-block-semicolon-space-before': ['never', { severity: 'warning' }],
    'block-closing-brace-empty-line-before': ['never', { severity: 'warning' }],
    'comment-empty-line-before': ['never', { severity: 'warning' }],
    'order/properties-order': [
      //css内容
      'content',
      'counter-increment',
      'counter-reset',
      'quotes',
      'crop',
      'move-to',
      'page-policy',

      //css3 过渡

      'transition',
      'transition-property',
      'transition-duration',
      'transition-delay',
      'transition-timing-function',

      //css3 2d 3d
      'transform-origin',
      'transform-style',
      'perspective',
      'perspective-origin',
      'backface-visibility',
      'transform',

      //动画
      'animation',
      'animation-name',
      'animation-duration',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'animation-play-state',
      'animation-fill-mode',

      //定位
      'box-sizing',
      'display',
      'vertical-align',
      'visibility',
      //溢出
      'overflow',
      'overflow-x',
      'overflow-y',
      'overflow-style',

      //表格
      'border-collapse', //边框合并
      'border-spacing',
      'caption-side',
      'empty-cells',
      'table-layout',

      //定位
      'position',
      'z-index',
      'left',
      'top',
      'right',
      'bottom',
      'clip',

      //浮动
      'float',
      'clear',

      //大小
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',

      //填充
      'padding',
      'padding-left',
      'padding-top',
      'padding-right',
      'padding-bottom',

      //间距
      'margin',
      'margin-left',
      'margin-top',
      'margin-right',
      'margin-bottom',

      //背景
      'background',
      'background-color',
      'background-image',
      'background-size',
      'background-position',
      'background-repeat',
      'background-attachment',
      'background-origin',
      'background-clip',

      //边框
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',

      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',

      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',

      'box-shadow',

      //效果

      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',

      'opacity',
      'cursor',
      'resize',

      //文字
      'font',
      'font-family',
      'font-size',
      'line-height',

      'font-weight',
      'text-align',
      'text-justify',
      'text-indent',
      'letter-spacing',

      'white-space',
      'word-spacing',
      'text-overflow',

      'word-break',
      'word-wrap',

      'color',
      'direction',
      'font-style',
      'text-decoration',
      'text-transform',
      'text-shadow',

      'font-variant',
      'font-size-adjust',
      'font-stretch',

      'unicode-bidi',
      'hanging-punctuation',
      'punctuation-trim',
      'text-align-last',
      'text-emphasis',

      'text-outline',
      'text-wrap',

      //无效
      'box-decoration-break',

      //旋转
      'rotation',
      'rotation-point',

      'color-profile',
      'rendering-intent',

      'bookmark-label',
      'bookmark-level',
      'bookmark-target',
      'float-offset',
      'hyphenate-after',
      'hyphenate-before',
      'hyphenate-character',
      'hyphenate-lines',
      'hyphenate-resource',
      'hyphens',
      'image-resolution',
      'marks',
      'string-set',

      'box-align',
      'box-direction',
      'box-flex',
      'box-flex-group',
      'box-lines',
      'box-ordinal-group',
      'box-orient',
      'box-pack',

      'grid-columns',
      'grid-rows',

      'target',
      'target-name',
      'target-new',
      'target-position',

      'marker-offset',

      'marquee-direction',
      'marquee-play-count',
      'marquee-speed',
      'marquee-style',

      'column-count',
      'column-fill',
      'column-gap',
      'column-rule',
      'column-rule-color',
      'column-rule-style',
      'column-rule-width',
      'column-span',
      'column-width',
      'columns',

      'fit',
      'fit-position',
      'image-orientation',
      'page',
      'size',

      'orphans',
      'page-break-after',
      'page-break-before',
      'page-break-inside',
      'widows',

      'appearance',

      'icon',
      'nav-down',
      'nav-index',
      'nav-left',
      'nav-right',
      'nav-up',
    ],
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*'],
  overrides: [
    // 若项目中存在scss文件，添加以下配置
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss',
    },
  ],
};
