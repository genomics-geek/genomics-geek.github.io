(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(420),o=a(417),c=a(418),s=(a(397),a(398),a(158));t.default=function(){return r.a.createElement(s.a,{title:"Home"},r.a.createElement(i.a,{className:"Home",vertical:!0,inverted:!0,textAlign:"center"},r.a.createElement(o.a,{className:"jumbotron",text:!0},r.a.createElement(c.a,{inverted:!0,as:"h1"},"Genomics Geek"),r.a.createElement(c.a,{inverted:!0,as:"h2"},"Genetics. Software. Bioinformatics."))))}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(145),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(150),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(172),l=a.n(s),u=a(148);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var d="1025518380"},154:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(53),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},155:function(e,t,a){},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Genomics Geek",description:"Genomics Geek personal website.",author:"@genomics-geek"}}}}},157:function(e,t,a){},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(420),s=a(417),l=a(419),u=a(148),m=a(170),d=(a(155),function(e){var t=e.activeItem,a=e.inverted;return r.a.createElement(c.a,{vertical:!0,inverted:a,textAlign:"center"},r.a.createElement(s.a,null,r.a.createElement(l.a,{className:"header-menu",size:"large",stackable:!0,pointing:!0,secondary:!0,inverted:a},r.a.createElement(l.a.Item,{as:u.Link,to:"/"},r.a.createElement("img",{alt:"",src:"https://s3.amazonaws.com/genomics-geek.com/genomics-geek-logo.png"})),r.a.createElement(l.a.Item,{name:"about",as:u.Link,to:"/about/",active:"about"===Object(m.toLower)(t)}),r.a.createElement(l.a.Item,{name:"blog",as:u.Link,to:"/blog/",active:"blog"===Object(m.toLower)(t)}),r.a.createElement(l.a.Item,{name:"software",as:u.Link,to:"/software/",active:"software"===Object(m.toLower)(t)}),r.a.createElement(l.a.Item,{name:"publications",as:u.Link,to:"/publications/",active:"publications"===Object(m.toLower)(t)}),r.a.createElement(l.a.Item,{name:"contact",as:u.Link,to:"/contact/",active:"contact"===Object(m.toLower)(t)}),r.a.createElement(l.a.Menu,{position:"right"},r.a.createElement(l.a.Item,{as:"a",href:"https://github.com/genomics-geek",target:"_blank",rel:"noopener noreferrer",icon:{name:"github",size:"large"}}),r.a.createElement(l.a.Item,{as:"a",href:"https://www.linkedin.com/in/michael-gonzalez-762aa837",target:"_blank",rel:"noopener noreferrer",icon:{name:"linkedin",size:"large"}}),r.a.createElement(l.a.Item,{as:"a",href:"https://twitter.com/TheCanesBoy2010",target:"_blank",rel:"noopener noreferrer",icon:{name:"twitter",size:"large"}}),r.a.createElement(l.a.Item,{as:"a",href:"https://stackoverflow.com/users/6212061/genomics-geek",target:"_blank",rel:"noopener noreferrer",icon:{name:"stack overflow",size:"large"}})))))});d.propTypes={inverted:o.a.bool},d.defaultProps={inverted:!0};var p=d,g=a(413),f=function(){return r.a.createElement(c.a,{inverted:!0,vertical:!0},r.a.createElement(s.a,{textAlign:"center"},r.a.createElement("p",null,"Powered with ",r.a.createElement(g.a,{name:"heart"})," by Gatsby 2.0")))},w=a(153),y=(a(157),function(e){var t=e.title,a=e.keywords,n=e.children;return r.a.createElement("div",null,r.a.createElement("div",{className:"layout"},r.a.createElement(w.a,{title:t,keywords:a}),r.a.createElement(p,{activeItem:t}),n),r.a.createElement(f,null))});y.propTypes={title:o.a.string.isRequired,keywords:o.a.arrayOf(o.a.string),children:o.a.node.isRequired},y.defaultProps={keywords:["genomics","blog","react","gatsby","genetics","bioinformatics"]};t.a=y},398:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-4ad20dd9c8689a234e2f.js.map