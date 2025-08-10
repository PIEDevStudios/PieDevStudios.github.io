const n=`---\r
layout: blog\r
title: Use This Blog for Markdown Reference\r
date: 2025-08-06T19:18:00.000-07:00\r
thumbnail: pie-web/public/assets/absmom_banner.jpg\r
---\r
\r
This article offers a sample of basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in MDX.\r
\r
## Headings\r
\r
The following HTML \`<h1>\`—\`<h6>\` elements represent six levels of section headings. \`<h1>\` is the highest section level while \`<h6>\` is the lowest.\r
\r
# H1\r
\r
## H2\r
\r
### H3\r
\r
#### H4\r
\r
##### H5\r
\r
###### H6\r
\r
# Paragraph\r
\r
&nbsp; Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.\r
\r
Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.\r
\r
## Images\r
\r
![Sample Image](assets/absmom_banner.jpg)\r
\r
## Blockquotes\r
\r
The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a \`footer\` or \`cite\` element, and optionally with in-line changes such as annotations and abbreviations.\r
\r
#### Blockquote without attribution\r
\r
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.\r
> **Note** that you can use _Markdown syntax_ within a blockquote.\r
\r
#### Blockquote with attribution\r
\r
> Simplicity is the ultimate sophistication.\r
>\r
> <cite>Leonardo da Vinci</cite>\r
\r
## Tables\r
\r
Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.\r
\r
| Name  | Age |\r
| ----- | --- |\r
| Bob   | 27  |\r
| Alice | 23  |\r
\r
#### Inline Markdown within tables\r
\r
<div style={{"overflowX": "auto"}}>\r
\r
| Inline&nbsp;&nbsp;&nbsp; | Markdown&nbsp;&nbsp;&nbsp; | In&nbsp;&nbsp;&nbsp;                | Table  |\r
| ------------------------ | -------------------------- | ----------------------------------- | ------ |\r
| _italics_                | **bold**                   | ~~strikethrough~~&nbsp;&nbsp;&nbsp; | \`code\` |\r
\r
</div>\r
\r
## Code Blocks\r
\r
#### Code block with backticks\r
\r
\`\`\`html\r
<!DOCTYPE html>\r
<html lang="en">\r
  <head>\r
    <meta charset="UTF-8" />\r
    <title>Example HTML5 Document</title>\r
  </head>\r
  <body>\r
    <p>Test</p>\r
  </body>\r
</html>\r
\`\`\`\r
\r
#### Code block indented with four spaces\r
\r
    <!DOCTYPE html>\r
    <html lang="en">\r
    <head>\r
      <meta charset="UTF-8">\r
      <title>Example HTML5 Document</title>\r
    </head>\r
    <body>\r
      <p>Test</p>\r
    </body>\r
    </html>\r
\r
#### Code block with Hugo's internal highlight shortcode\r
\r
\`\`\`html\r
<!DOCTYPE html>\r
<html lang="en">\r
  <head>\r
    <meta charset="UTF-8" />\r
    <title>Example HTML5 Document</title>\r
  </head>\r
  <body>\r
    <p>Test</p>\r
  </body>\r
</html>\r
\`\`\`\r
\r
#### Wide code block\r
\r
\`\`\`html\r
<!DOCTYPE html>\r
<html lang="en">\r
  <head>\r
    <meta charset="UTF-8" />\r
    <title>Example HTML5 Document</title>\r
  </head>\r
  <body>\r
    <p>\r
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\r
      tempor incididunt ut labore et dolore magna aliqua.\r
    </p>\r
  </body>\r
</html>\r
\`\`\`\r
\r
## List Types\r
\r
#### Ordered List\r
\r
1. First item\r
2. Second item\r
3. Third item\r
\r
#### Unordered List\r
\r
- List item\r
- Another item\r
- And another item\r
\r
#### Nested list\r
\r
- Item\r
  1. First Sub-item\r
  2. Second Sub-item\r
\r
## Other Elements — abbr, sub, sup, kbd, mark\r
\r
<p>\r
  <abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.\r
</p>\r
\r
H<sub>2</sub>O\r
\r
X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>\r
\r
Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.\r
\r
Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.\r
`;export{n as default};
