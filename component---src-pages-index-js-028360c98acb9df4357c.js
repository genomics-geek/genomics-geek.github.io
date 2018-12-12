(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(417),o=a(414),s=a(415),c=(a(395),a(156));t.default=function(){return r.a.createElement(c.a,{title:"Home"},r.a.createElement(i.a,{vertical:!0,inverted:!0,textAlign:"center",className:"masthead"},r.a.createElement(o.a,{text:!0},r.a.createElement(s.a,{inverted:!0,as:"h1"},"Genomics Geek Website"),r.a.createElement(s.a,{inverted:!0,as:"h2"},"Genetics. Software. Bioinformatics."))))}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(145),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(150),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},152:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(170),l=a.n(c),u=a(147);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m;var d="1025518380"},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(53),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},155:function(e,t,a){},156:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(417),c=a(414),l=a(416),u=a(147),m=function(e){var t=e.inverted;return r.a.createElement(s.a,{vertical:!0,inverted:t,textAlign:"center",className:"masthead"},r.a.createElement(c.a,null,r.a.createElement(l.a,{size:"large",pointing:!0,secondary:!0,inverted:t},r.a.createElement(l.a.Item,{icon:{name:"spy",size:"big"},as:u.Link,to:"/"},r.a.createElement("img",{alt:"",src:"https://s3.amazonaws.com/genomics-geek.com/genomics-geek-logo.png"})),r.a.createElement(l.a.Item,{name:"about",as:u.Link,to:"/about/"}),r.a.createElement(l.a.Item,{name:"software",as:u.Link,to:"/software/"}),r.a.createElement(l.a.Item,{name:"publications",as:u.Link,to:"/publications/"}),r.a.createElement(l.a.Item,{name:"contact",as:u.Link,to:"/contact/"}),r.a.createElement(l.a.Menu,{position:"right"},r.a.createElement(l.a.Item,{as:"a",href:"https://github.com/genomics-geek",target:"_blank",rel:"noopener noreferrer",icon:{name:"github",size:"large"}}),r.a.createElement(l.a.Item,{as:"a",href:"https://www.linkedin.com/in/michael-gonzalez-762aa837",target:"_blank",rel:"noopener noreferrer",icon:{name:"linkedin",size:"large"}}),r.a.createElement(l.a.Item,{as:"a",href:"https://twitter.com/TheCanesBoy2010",target:"_blank",rel:"noopener noreferrer",icon:{name:"twitter",size:"large"}}),r.a.createElement(l.a.Item,{as:"a",href:"https://stackoverflow.com/users/6212061/genomics-geek",target:"_blank",rel:"noopener noreferrer",icon:{name:"stack overflow",size:"large"}})))))};m.propTypes={inverted:o.a.bool},m.defaultProps={inverted:!0};var d=m,p=a(152),g=(a(155),function(e){var t=e.title,a=e.keywords,n=e.children;return r.a.createElement("div",null,r.a.createElement(p.a,{title:t,keywords:a}),r.a.createElement(d,null),n)});g.propTypes={title:o.a.string.isRequired,keywords:o.a.arrayOf([o.a.string]),children:o.a.node.isRequired},g.defaultProps={keywords:["genomics","blog","react","gatsby","genetics","bioinformatics"]};t.a=g}}]);
//# sourceMappingURL=component---src-pages-index-js-028360c98acb9df4357c.js.map