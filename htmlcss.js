/*
DOM : 
   DOM is a way to represent the webpage in a structured hierarchical way so that it will become easier for programmers and users to glide through the document. With DOM, we can easily access and manipulate 
tags, IDs,classes, Attributes, or Elements using commands or methods provided by the Document object.

HTML Entities : 
HTML entities are a piece of text (string) that begins with a ampersand(&) and ends with a semicolon(;). They are frequently used to display reserved and invisible characters.

Semantic elements: 
They are the HTML elements that represent its meaning to the browser and developer 
about its contents 
Ex: Header, footer, paragraph

Meta Tags:
The <meta> tag defines metadata about an HTML document. Metadata is data (information) about data.
<meta> tags always go inside the <head> element, and are typically used to specify character set,
 page description, keywords, author of the document, and viewport settings.

Web Storages in HTML 5:

Web Workers:
A web worker is a Javascript code that runs on a separate thread . It is used to compute long and heavy tasks.

What is HTML ?
HTML is the standard markup language for creating web pages . It is used to structure a web page
and its content.

HTML Attributes:
These are additional information on HTML tags that change the way the html element behaves or is diplayed.
They placed inside opening tags in angled brackets

Difference between 'id' and 'class':
ID is used only toh identify one single element . Class can be used to indentify more than one HTML element.

Difference between Inline elements and block-level elements:
Inline elements take up space that is absolutely needed and does not start from a new line .
Block elements start from a new line and consume the ful width of the page .

To create hyperlink: 
An anchor tag or <a> tag in HTML is used to create hyperlinks . This creates a path between two different 
HTML web pages .

Types of List in HTML:
Ordered List: Order of item matters .
Unordered List : order of items does not matter . 
Definition List :  definition form like dictionary.

CSS Box Model : It is a box that wraps around every HTML elements . 
Content , padding, border and margin.

CSS sprite : It combines mutiple images into a larger image .
It helps fast loading time .

CSS Preprocessor: 
CSS Preprocessors compile the code which is written using a special compiler. They then use that to create a CSS file.
They provide var, else /if 

Concept of Specifity:Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied

!important: For giving priority to some style.

Diffference between visibilty: hidden & display: none:
visibility:hidden means that unlike display:none , the tag is not visible, but space is allocated for it on the page. The tag is rendered, it just isn't seen on the page. They are not synonyms. display:none removes the element from the normal flow of the page, allowing other elements to fill in. 

Positon properties : 
There are five different position values:
1. static:positioned static by default,not affected by the top, bottom, left,right properties.
2. relative:An element with position: relative; is positioned relative to its normal position. 
3. fixed: An element with position: fixed; is positioned relative to the viewport
4. absolute :An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
5. sticky : An element with position: sticky; is positioned based on the user's scroll position.
   A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

box-sizing :'border-box'
The CSS box-sizing property allows us to include the padding and border in an element's total width and height.



Inline , inline-block, block: 
1. Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.
2. Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.
3. Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.

pseudo element:A CSS pseudo-element is used to style specified parts of an element.
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}

pseudo class : A pseudo-class is used to define a special state of an element.
a:link , :active,: hover , :selected{
  color: #FF0000;
}


Difference between flex-box and grid:
CSS Flexbox Layout is that flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout - rows, and columns at the same time.
*/