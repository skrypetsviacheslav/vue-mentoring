(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"0418":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid bg-image"},[t._t("default")],2)},i=[],s={name:"Header"},r=s,o=(a("527f"),a("2877")),c=Object(o["a"])(r,n,i,!1,null,"02c4830a",null);e["default"]=c.exports},"0439":function(t,e,a){"use strict";a.r(e),a.d(e,"mutations",(function(){return s}));var n=a("ade3"),i=a("5609"),s=Object(n["a"])({},i["MUTATIONS"].SET_SELECTED_MOVIE,(function(t,e){t.selectedMovie=e}))},"05e6":function(t,e,a){"use strict";function n(t){return/^\d\d\d\d-\d\d-\d\d$/.test(t)?t.substring(0,4):t}a.r(e),a.d(e,"extractYearFromDate",(function(){return n}))},"07a4":function(t,e,a){"use strict";a.r(e);var n,i=a("ade3"),s=a("2b0e"),r=a("2f62"),o=a("08dd"),c=a("b900"),l=a("f92f"),u=a("5aed"),d=a("f24d"),_=a("8be2"),f=a("5609"),E=a("0439"),O=a("63e0");s["a"].use(r["a"]),e["default"]=new r["a"].Store({state:Object(i["a"])({},f["STATES"].SELECTED_MOVIE,{}),mutations:E["mutations"],actions:O["actions"],modules:(n={},Object(i["a"])(n,u["MODULE_NAME"],o["default"]),Object(i["a"])(n,d["MODULE_NAME"],c["default"]),Object(i["a"])(n,_["MODULE_NAME"],l["default"]),n)})},"08dd":function(t,e,a){"use strict";a.r(e);var n,i=a("ade3"),s=a("3594"),r=a("0c9f"),o=a("5aed");e["default"]={namespaced:!0,state:(n={},Object(i["a"])(n,o["STATES"].GALLERY_MOVIES,[]),Object(i["a"])(n,o["STATES"].FOUND_MOVIES_SIZE,0),n),mutations:s["mutations"],actions:r["actions"]}},"0bb1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"application-name-label"},[a("b",[t._v(t._s(t.companyName))]),t._v(t._s(t.appName)+" ")])},i=[],s={name:"AppNameLabel",props:{companyName:{type:String,default:"netflix"},appName:{type:String,default:"roulette"}}},r=s,o=(a("2043"),a("2877")),c=Object(o["a"])(r,n,i,!1,null,"5a886f6f",null);e["default"]=c.exports},"0c9f":function(t,e,a){"use strict";a.r(e),a.d(e,"actions",(function(){return l}));var n,i=a("ade3"),s=a("5aed"),r=a("f24d"),o=a("630a"),c=a("bb21"),l=(n={},Object(i["a"])(n,s["ACTIONS"].SEARCH_MOVIES,(function(t){var e=t.rootState,a=t.commit;c["default"].getMovies({sortBy:e[r["MODULE_NAME"]][r["STATES"].SORT_BY_OPTION],search:e[r["MODULE_NAME"]][r["STATES"].SEARCH_TEXT],searchBy:e[r["MODULE_NAME"]][r["STATES"].SEARCH_BY_OPTION],limit:o["APP_CONFIG"].UPLOADING_MOVIES_CHUNK_SIZE}).then((function(t){var e=t.data,n=t.total;a(s["MUTATIONS"].SET_FOUND_MOVIES_SIZE,n),a(s["MUTATIONS"].SET_GALLERY_MOVIES,e)})).catch((function(t){console.log(t)}))})),Object(i["a"])(n,s["ACTIONS"].LOAD_MORE_MOVIES,(function(t){var e=t.state,a=t.rootState,n=t.commit,i=e[s["STATES"].GALLERY_MOVIES].length,l=o["APP_CONFIG"].UPLOADING_MOVIES_CHUNK_SIZE;c["default"].getMovies({sortBy:a[r["MODULE_NAME"]][r["STATES"].SORT_BY_OPTION],search:a[r["MODULE_NAME"]][r["STATES"].SEARCH_TEXT],searchBy:a[r["MODULE_NAME"]][r["STATES"].SEARCH_BY_OPTION],limit:l,offset:i}).then((function(t){var e=t.data;n(s["MUTATIONS"].ADD_MOVIES_TO_GALLERY,e)})).catch((function(t){console.log(t)}))})),n)},"0d1b":function(t,e,a){"use strict";a("b21a")},"0da3":function(t,e,a){"use strict";a.r(e);var n,i=a("ade3"),s=a("1682");e["default"]=(n={},Object(i["a"])(n,s["default"].MAIN_PAGE_FIND_YOUR_MOVIE_HEADER,"FIND YOUR MOVIE"),Object(i["a"])(n,s["default"].MAIN_PAGE_MOVIE_FOUND_LABEL,"movie found"),Object(i["a"])(n,s["default"].NO_FILM_FOUND_MESSAGE,"No films found"),Object(i["a"])(n,s["default"].SEARCH_BAR_BUTTON_LABEL,"Search"),Object(i["a"])(n,s["default"].DETAIL_PAGE_FILMS_BY_PREFIX_MSG,"Films By"),Object(i["a"])(n,s["default"].DETAIL_PAGE_FILMS_BY_SUFFIX_MSG,"genre"),Object(i["a"])(n,s["default"].SORT_BY_LABEL,"Sort By"),Object(i["a"])(n,s["default"].SORT_BY_FIRST_OPTION_TEXT,"Release Date"),Object(i["a"])(n,s["default"].SORT_BY_SECOND_OPTION_TEXT,"Rating"),Object(i["a"])(n,s["default"].SEARCH_BY_LABEL,"SEARCH BY"),Object(i["a"])(n,s["default"].SEARCH_BY_FIRST_OPTION_TEXT,"Title"),Object(i["a"])(n,s["default"].SEARCH_BY_SECOND_OPTION_TEXT,"Genre"),Object(i["a"])(n,s["default"].LOAD_MORE_LABEL,"Load more"),Object(i["a"])(n,s["default"].YEAR,"year"),Object(i["a"])(n,s["default"].MIN,"min"),n)},1170:function(t,e,a){"use strict";a.r(e),a.d(e,"actionsData",(function(){return s})),a.d(e,"Empty",(function(){return o})),a.d(e,"With_Cards",(function(){return c}));a("b64b");var n=a("7456"),i=a("cc29");e["default"]={title:"FilmCardGallery",excludeStories:/.*Data$/,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333333"},{name:"ligth",value:"#F8F8F8"},{name:"white",value:"#FFFFFF"}]}}};var s={OnFilmGalleryCardClicked:Object(i["action"])("film-gallery-card-clicked")},r=function(t,e){var a=e.argTypes;return{components:{FilmCardGallery:n["default"]},props:Object.keys(a),methods:s,template:"<FilmCardGallery v-bind=\"$props\" @film-gallery-card-clicked='OnFilmGalleryCardClicked'/>"}},o=r.bind({}),c=r.bind({});c.args={cards:[{id:1,poster_path:"https://via.placeholder.com/300x500.png",title:"cardTitle1",release_date:"2000",genres:["Action","Drama"]},{id:2,poster_path:"https://via.placeholder.com/300x500.png",title:"cardTitle2",release_date:"2007",genres:["Drama","Action"]},{id:3,poster_path:"https://via.placeholder.com/300x500.png",title:"cardTitle3",release_date:"2010",genres:["Test genre"]},{id:4,poster_path:"https://via.placeholder.com/300x500.png",title:"cardTitle4",release_date:"2007",genres:["Comedy"]}]}},"121a":function(t,e,a){"use strict";a.r(e),a.d(e,"Empty",(function(){return s})),a.d(e,"With_AppNameLabel",(function(){return r}));var n=a("fd2d"),i=a("0bb1");e["default"]={title:"Footer"};var s=function(){return{components:{Footer:n["default"]},template:"<Footer/>"}},r=function(){return{components:{Footer:n["default"],AppNameLabel:i["default"]},template:'\n    <Footer>\n        <AppNameLabel class="text-center w-100"/>\n    </Footer>'}}},"13a8":function(t,e,a){"use strict";a.r(e),a.d(e,"actionsData",(function(){return s})),a.d(e,"Kill_Bill_vol2",(function(){return o}));a("b64b");var n=a("22f9"),i=a("cc29");e["default"]={title:"FilmCard",excludeStories:/.*Data$/};var s={onFilmCardClicked:Object(i["action"])("film-card-clicked")},r=function(t,e){var a=e.argTypes;return{components:{FilmCard:n["default"]},props:Object.keys(a),methods:s,template:"<FilmCard v-bind=\"$props\" @film-card-clicked='onFilmCardClicked'/>"}},o=r.bind({});o.args={movie:{poster_path:"https://images-na.ssl-images-amazon.com/images/I/51UQNTy4GqL._AC_.jpg",title:"Kill Bill: Vol 2",genres:["Oscar winning Movie","Action"],release_date:"1994-05-01"}}},"14ac":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-bar"},[a("div",{staticClass:"input-group input-group-lg"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control text-white bg-dark border-dark",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.searchText},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchSubmitted(e)},input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),a("button",{staticClass:"btn input-group-btn ",attrs:{type:"button"},on:{click:t.searchSubmitted}},[a("span",{staticClass:"m-4"},[t._v(" "+t._s(t.searchButtonLabel)+" ")])])]),a("Toggle",{attrs:{label:t.searchByLabel,firstOption:t.firstOption,secondOption:t.secondOption},on:{"value-switched":t.searchByOptionChanged}})],1)},i=[],s=a("ae48"),r=a("630a"),o=a("f080"),c={name:"SearchBar",data:function(){return{searchByLabel:o["default"]["EN"].SEARCH_BY_LABEL,searchButtonLabel:o["default"]["EN"].SEARCH_BAR_BUTTON_LABEL,selectedOption:this.firstOption,searchText:""}},components:{Toggle:s["default"]},props:{firstOption:{type:String,require:!0},secondOption:{type:String,require:!0}},methods:{searchByOptionChanged:function(t){this.selectedOption=t},searchSubmitted:function(){console.log("SearchBar#onSearchSubmitted"),this.$emit(r["EVENTS"].SEARCH_BAR_SEARCH_SUBMITTED,this.searchText,this.selectedOption)}}},l=c,u=(a("c1a5"),a("2877")),d=Object(u["a"])(l,n,i,!1,null,"4506b6a5",null);e["default"]=d.exports},1682:function(t,e,a){"use strict";a.r(e),e["default"]={MAIN_PAGE_FIND_YOUR_MOVIE_HEADER:"MAIN_PAGE_FIND_YOUR_MOVIE_HEADER",MAIN_PAGE_MOVIE_FOUND_LABEL:"MAIN_PAGE_MOVIE_FOUND_LABEL",NO_FILM_FOUND_MESSAGE:"NO_FILM_FOUND_MESSAGE",SEARCH_BAR_BUTTON_LABEL:"SEARCH_BAR_BUTTON_LABEL",DETAIL_PAGE_FILMS_BY_PREFIX_MSG:"DETAIL_PAGE_FILMS_BY_PREFIX_MSG",DETAIL_PAGE_FILMS_BY_SUFFIX_MSG:"DETAIL_PAGE_FILMS_BY_SUFFIX_MSG",SORT_BY_LABEL:"SORT_BY_LABEL",SORT_BY_FIRST_OPTION_TEXT:"SORT_BY_FIRST_OPTION_TEXT",SORT_BY_SECOND_OPTION_TEXT:"SORT_BY_SECOND_OPTION_TEXT",SEARCH_BY_LABEL:"SEARCH_BY_LABEL",SEARCH_BY_FIRST_OPTION_TEXT:"SEARCH_BY_FIRST_OPTION_TEXT",SEARCH_BY_SECOND_OPTION_TEXT:"SEARCH_BY_SECOND_OPTION_TEXT",LOAD_MORE_LABEL:"LOAD_MORE_LABEL",YEAR:"YEAR",MIN:"MIN"}},1687:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAHCBAMAAACnHem0AAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyxsbG+vr6qqqrOJZh+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACF0lEQVR4nO3UTUsbURQG4BMTmyyTjEaXptLW5aRQcRmlQpcmNSVL2023iUXoMjYI/uzOh0pQpEqZfsDzLDIz595wX+aeuREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPC4bkS9/ctZx2f3K0/40+/oDB9bIVm5nwzvj1Yd6+QpsbYejFYcq9d7SqzkwWjFsZJ+mq1w3k2z+9r38Sya/d2Ig8ly0Ekb/dNswlXEoLPIy7U0BlE7GC2jMVpWHGu+qLebm1cf81jTD0nMp5M0Xl2P93vp4V5/GNvZR7Hfm+XlMtb4/TTme+OKY7WSeru1E5/yWIu4jh+xflZPYpAm0YsXJ7GZv8ekKJexduI49uJdxbHq3Xq7NoujPNYwLrLubuzUN/KR5uZkksRGMasol7FmMc+fKo4Vn7+1B5EtFcWKWaM123E5nUXS6HQ6W2W3J0W5jJX9lJOqjbW+uxLrolyx+WU7e1tb5YS/E6vRW9nEo2K3YhjzNMm2srm4iXW7iYfl55hUHytGdy2fX/LezkLkLf8y1k5uY+Xl9WH0y1ivo1V5rPndATHJLsUB0b8exzSdT0ez21h5uXV6NCpjzb9eVR5r7e44Pe/eHKdvJ8u4TJvFcVrOysv1/rTsrezpTbWxVtXSP7bUc4j1HP9oLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjf/ATga0cdwgnnxgAAAABJRU5ErkJggg=="},"1b3c":function(t,e,a){"use strict";a("aa4b")},2043:function(t,e,a){"use strict";a("91f4")},"22f9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",on:{click:t.onCardClick}},[a("img",{staticClass:"card-img-top",attrs:{src:t.imageUrl},on:{error:t.setDefaultImage}}),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-9"},[a("h6",{staticClass:"card-title"},[t._v(t._s(t.title))])]),a("div",{staticClass:"col"},[a("span",{staticClass:"card-title border rounded p-1"},[t._v(" "+t._s(t._f("extractYear")(t.releaseYear))+" ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("p",{staticClass:"card-text"},[a("small",[t._v(t._s(t._f("joinByComma")(t.genres)))])])])])])])},i=[],s=a("630a"),r=s.EVENTS,o=s.APP_CONFIG,c={name:"FilmCard",props:{movie:{type:Object,require:!0}},computed:{title:function(){return this.movie.title},imageUrl:function(){return this.movie.poster_path},genres:function(){return this.movie.genres},releaseYear:function(){return this.movie.release_date}},methods:{onCardClick:function(){console.log("FilmCard#onCardClick"),this.$emit(r.FILM_CARD_CLICKED)},setDefaultImage:function(t){t.target.src=a("a8ec")("./".concat(o.DEFAULT_IMAGE_PATH))}}},l=c,u=(a("4282"),a("2877")),d=Object(u["a"])(l,n,i,!1,null,"c31c9c4c",null);e["default"]=d.exports},"2d69":function(t,e,a){"use strict";a.r(e),a.d(e,"actionsData",(function(){return s})),a.d(e,"Default",(function(){return o})),a.d(e,"Sort_by_ReleaseDate_and_Rating",(function(){return c}));a("b64b");var n=a("ae48"),i=a("cc29");e["default"]={title:"Toggle",excludeStories:/.*Data$/,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333333"},{name:"ligth",value:"#F8F8F8"},{name:"white",value:"#FFFFFF"}]}}};var s={onValueSwitch:Object(i["action"])("value-switched")},r=function(t,e){var a=e.argTypes;return{components:{Toggle:n["default"]},props:Object.keys(a),methods:s,template:"<Toggle v-bind=\"$props\" @value-switched='onValueSwitch'/>"}},o=r.bind({});o.args={label:"label",firstOption:"firstOptions",secondOption:"secondOptions"};var c=r.bind({});c.args={label:"Sort by",firstOption:"ReleaseDate",secondOption:"Rating"}},3594:function(t,e,a){"use strict";a.r(e),a.d(e,"mutations",(function(){return r}));var n,i=a("ade3"),s=(a("159b"),a("5aed")),r=(n={},Object(i["a"])(n,s["MUTATIONS"].ADD_MOVIES_TO_GALLERY,(function(t,e){e.forEach((function(e){return t[s["STATES"].GALLERY_MOVIES].push(e)}))})),Object(i["a"])(n,s["MUTATIONS"].SET_GALLERY_MOVIES,(function(t,e){t[s["STATES"].GALLERY_MOVIES]=e})),Object(i["a"])(n,s["MUTATIONS"].SET_FOUND_MOVIES_SIZE,(function(t,e){t[s["STATES"].FOUND_MOVIES_SIZE]=e})),n)},"3af1":function(t,e,a){"use strict";a.r(e),a.d(e,"Kill_Bill_vol2",(function(){return s}));a("b64b");var n=a("fb03");e["default"]={title:"FilmDetailCard"};var i=function(t,e){var a=e.argTypes;return{components:{FilmDetailCard:n["default"]},props:Object.keys(a),template:'<FilmDetailCard v-bind="$props"/>'}},s=i.bind({});s.args={movie:{poster_path:"https://images-na.ssl-images-amazon.com/images/I/51UQNTy4GqL._AC_.jpg",title:"Kill Bill: Vol 2",genres:["Oscar winning Movie","Action"],release_date:"1994-05-01",vote_average:4.3,runtime:154,overview:"Kill Bill: Volume 2 is a 2004 American martial arts film written and directed by Quentin Tarantino. "}}},"40b9":function(t,e,a){"use strict";a("ac58")},4282:function(t,e,a){"use strict";a("68f6")},"527f":function(t,e,a){"use strict";a("54e5")},"54e5":function(t,e,a){},5609:function(t,e,a){"use strict";a.r(e),a.d(e,"STATES",(function(){return n})),a.d(e,"MUTATIONS",(function(){return i})),a.d(e,"ACTIONS",(function(){return s}));var n={SELECTED_MOVIE:"selectedMovie"},i={SET_SELECTED_MOVIE:"setSelectedMovie"},s={FETCH_SELECTED_MOVIE:"fetchSelectedMovie"}},"59fd":function(t,e,a){},"5a7d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("BaseLayout",{scopedSlots:t._u([{key:"header",fn:function(){return[a("Header",[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("AppNameLabel")],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col text-white"},[a("h1",[t._v(t._s(t.findYourMovieHeader))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("SearchBar",{attrs:{firstOption:t.searchByFirstOptionText,secondOption:t.searchBySecondOptionText},on:{"search-submitted":t.onSearchBarButtonClicked}})],1)])])]},proxy:!0},{key:"toolbar",fn:function(){return[a("div",{staticClass:"row align-items-center h-100"},[a("div",{staticClass:"col"},[a("span",{staticClass:"text-white pl-5"},[t._v(" "+t._s(t.foundMoviesSize)+" "+t._s(t.movieFoundLabel)+" ")])]),a("div",{staticClass:"col"},[a("Toggle",{staticClass:"float-right",attrs:{label:t.sortByLabel,firstOption:t.sortByFirstOptionText,secondOption:t.sortBySecondOptionText},on:{"value-switched":t.onSortByToggleValueSwitched}})],1)])]},proxy:!0}])},[a("FilmCardGallery",{staticClass:"gallery__bg-dark p-4",attrs:{cards:t.galleryMovies},on:{"film-gallery-card-clicked":t.onFilmCardClick,"film-gallery-load-more-clicked":t.OnFilmGalleryLoadMoreClicked}})],1)],1)},i=[],s=a("0bb1"),r=a("0418"),o=a("14ac"),c=a("7456"),l=a("ae48"),u=a("a349"),d=a("5f35"),_=a("f080"),f=a("5aed"),E=a("f24d"),O=a("5609"),m={name:"MainPage",components:{BaseLayout:u["default"],AppNameLabel:s["default"],Header:r["default"],SearchBar:o["default"],Toggle:l["default"],FilmCardGallery:c["default"]},data:function(){return{findYourMovieHeader:_["default"]["EN"].MAIN_PAGE_FIND_YOUR_MOVIE_HEADER,movieFoundLabel:_["default"]["EN"].MAIN_PAGE_MOVIE_FOUND_LABEL,sortByLabel:_["default"]["EN"].SORT_BY_LABEL,sortByFirstOptionText:_["default"]["EN"].SORT_BY_FIRST_OPTION_TEXT,sortBySecondOptionText:_["default"]["EN"].SORT_BY_SECOND_OPTION_TEXT,searchByFirstOptionText:_["default"]["EN"].SEARCH_BY_FIRST_OPTION_TEXT,searchBySecondOptionText:_["default"]["EN"].SEARCH_BY_SECOND_OPTION_TEXT}},computed:{galleryMovies:function(){return this.$store.state[f["MODULE_NAME"]][f["STATES"].GALLERY_MOVIES]},foundMoviesSize:function(){return this.$store.state[f["MODULE_NAME"]][f["STATES"].FOUND_MOVIES_SIZE]}},methods:{onSortByToggleValueSwitched:function(t){console.log("MainPage#onSortByToggleValueSwitched",t),t===_["default"]["EN"].SORT_BY_FIRST_OPTION_TEXT?this.$store.commit(E["MODULE_NAME"]+"/"+E["MUTATIONS"].SET_SORT_BY_OPTION,E["SORT_BY_OPTIONS"].RELEASE_DATE):this.$store.commit(E["MODULE_NAME"]+"/"+E["MUTATIONS"].SET_SORT_BY_OPTION,E["SORT_BY_OPTIONS"].RATING),this.$store.dispatch(f["MODULE_NAME"]+"/"+f["ACTIONS"].SEARCH_MOVIES)},onSearchBarButtonClicked:function(t,e){console.log("MainPage#onSearchBarButtonClicked",t,e),this.$store.commit(E["MODULE_NAME"]+"/"+E["MUTATIONS"].SET_SEARCH_TEXT,t),e===_["default"]["EN"].SEARCH_BY_FIRST_OPTION_TEXT?this.$store.commit(E["MODULE_NAME"]+"/"+E["MUTATIONS"].SET_SEARCH_BY_OPTION,E["SEARCH_BY_OPTIONS"].TITLE):this.$store.commit(E["MODULE_NAME"]+"/"+E["MUTATIONS"].SET_SEARCH_BY_OPTION,E["SEARCH_BY_OPTIONS"].GENRE),this.$store.dispatch(f["MODULE_NAME"]+"/"+f["ACTIONS"].SEARCH_MOVIES)},onFilmCardClick:function(t){console.log("MainPage#onFilmCardClick id",t),this.$store.dispatch(O["ACTIONS"].FETCH_SELECTED_MOVIE,t).then((function(){return window.location.href=d["publicPath"]+"details"}))},OnFilmGalleryLoadMoreClicked:function(){console.log("FilmDetailPage#OnFilmGalleryLoadMoreClicked"),this.$store.dispatch(f["MODULE_NAME"]+"/"+f["ACTIONS"].LOAD_MORE_MOVIES)}},beforeMount:function(){this.$store.dispatch(f["MODULE_NAME"]+"/"+f["ACTIONS"].SEARCH_MOVIES)}},A=m,S=(a("0d1b"),a("2877")),T=Object(S["a"])(A,n,i,!1,null,"65ed34dd",null);e["default"]=T.exports},"5aed":function(t,e,a){"use strict";a.r(e),a.d(e,"MODULE_NAME",(function(){return n})),a.d(e,"STATES",(function(){return i})),a.d(e,"MUTATIONS",(function(){return s})),a.d(e,"ACTIONS",(function(){return r}));var n="mainPage",i={GALLERY_MOVIES:"galleryMovies",FOUND_MOVIES_SIZE:"foundMoviesSize"},s={SET_GALLERY_MOVIES:"setGalleryMovies",ADD_MOVIES_TO_GALLERY:"addMoviesToGallery",SET_FOUND_MOVIES_SIZE:"setFoundMoviesSize"},r={LOAD_MORE_MOVIES:"loadMoreMovies",SEARCH_MOVIES:"searchMovies"}},"5f35":function(t,e,a){t.exports={publicPath:"/vue-mentoring/",pages:{index:{entry:"src/mainPage.js",title:"Main Page"},details:{entry:"src/filmDetailPage.js",title:"Film Detail Page"}}}},"630a":function(t,e,a){"use strict";a.r(e),a.d(e,"EVENTS",(function(){return n})),a.d(e,"MUTATIONS",(function(){return i})),a.d(e,"APP_CONFIG",(function(){return s}));var n={FILM_CARD_CLICKED:"film-card-clicked",FILM_GALLERY_CARD_CLICKED:"film-gallery-card-clicked",FILM_GALLERY_LOAD_MORE_CLICKED:"film-gallery-load-more-clicked",SEARCH_BAR_SEARCH_SUBMITTED:"search-submitted",TOGGLE_VALUE_SWITCHED:"value-switched"},i={SET_SELECTED_MOVIE:"setSelectedMovie"},s={UPLOADING_MOVIES_CHUNK_SIZE:6,DEFAULT_IMAGE_PATH:"assets/300x450.png"}},"633a":function(t,e,a){"use strict";a.r(e),a.d(e,"actionsData",(function(){return s})),a.d(e,"By_Title_and_Genre",(function(){return o}));a("b64b");var n=a("14ac"),i=a("cc29");e["default"]={title:"SearchBar",excludeStories:/.*Data$/,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333333"},{name:"ligth",value:"#F8F8F8"},{name:"white",value:"#FFFFFF"}]}}};var s={onSearchSunmitted:Object(i["action"])("search-submitted")},r=function(t,e){var a=e.argTypes;return{components:{SearchBar:n["default"]},props:Object.keys(a),methods:s,template:"<SearchBar v-bind=\"$props\" @search-submitted='onSearchSunmitted'/>"}},o=r.bind({});o.args={firstOption:"TITLE",secondOption:"GENRE"}},"63e0":function(t,e,a){"use strict";a.r(e),a.d(e,"actions",(function(){return r}));var n=a("ade3"),i=a("5609"),s=a("bb21"),r=Object(n["a"])({},i["ACTIONS"].FETCH_SELECTED_MOVIE,(function(t,e){var a=t.commit;return s["default"].getById(e).then((function(t){return a(i["MUTATIONS"].SET_SELECTED_MOVIE,t)})).catch((function(t){console.log(t)}))}))},"68f6":function(t,e,a){},"6be6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("BaseLayout",{scopedSlots:t._u([{key:"header",fn:function(){return[a("Header",[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("AppNameLabel")],1),a("div",{staticClass:"col"},[a("div",{staticClass:"float-right"},[a("a",{staticStyle:{cursor:"pointer"},on:{click:t.goToMainPage}},[a("i",{staticClass:"fa fa-search icon-red"})])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("FilmDetailCard",{attrs:{movie:t.selectedMovie}})],1)])])]},proxy:!0},{key:"toolbar",fn:function(){return[a("div",{staticClass:"row"},[a("div",{staticClass:"col pl-5"},[a("span",{staticClass:"text-white pl-5"},[t._v(" "+t._s(t.filmsByMsg)+" ")])])])]},proxy:!0}])},[a("FilmCardGallery",{staticClass:"gallery__bg-dark p-4",attrs:{cards:t.movies},on:{"film-gallery-card-clicked":t.onFilmCardClick,"film-gallery-load-more-clicked":t.OnFilmGalleryLoadMoreClicked}})],1)],1)},i=[],s=(a("99af"),a("88bc")),r=a.n(s),o=a("0bb1"),c=a("0418"),l=a("fb03"),u=a("7456"),d=a("a349"),_=a("f080"),f=a("8be2"),E=a("5f35"),O=a("5609"),m={name:"FilmDetailPage",components:{BaseLayout:d["default"],AppNameLabel:o["default"],Header:c["default"],FilmDetailCard:l["default"],FilmCardGallery:u["default"]},data:function(){return{filmsByPrefix:_["default"]["EN"].DETAIL_PAGE_FILMS_BY_PREFIX_MSG,filmsBySuffix:_["default"]["EN"].DETAIL_PAGE_FILMS_BY_SUFFIX_MSG}},computed:{selectedMovie:function(){return r()(this.$store.state[O["STATES"].SELECTED_MOVIE],["id","title","poster_path","vote_average","genres","release_date","runtime","overview"])},selectedMovieMainGenre:function(){return this.selectedMovie.genres[0]},movies:function(){return this.$store.state[f["MODULE_NAME"]][f["STATES"].GALLERY_MOVIES]},filmsByMsg:function(){return"".concat(this.filmsByPrefix," ").concat(this.selectedMovieMainGenre," ").concat(this.filmsBySuffix)}},methods:{onFilmCardClick:function(t){var e=this;this.$store.dispatch(O["ACTIONS"].FETCH_SELECTED_MOVIE,t).then((function(){return e.$store.dispatch(f["MODULE_NAME"]+"/"+f["ACTIONS"].SEARCH_MOVIES_BY_GENRE)}))},OnFilmGalleryLoadMoreClicked:function(){console.log("FilmDetailPage#OnFilmGalleryLoadMoreClicked"),this.$store.dispatch(f["MODULE_NAME"]+"/"+f["ACTIONS"].LOAD_MORE_MOVIES)},goToMainPage:function(){window.location.href=E["publicPath"]}},beforeMount:function(){var t=this;this.$store.dispatch(O["ACTIONS"].FETCH_SELECTED_MOVIE,443009).then((function(){return t.$store.dispatch(f["MODULE_NAME"]+"/"+f["ACTIONS"].SEARCH_MOVIES_BY_GENRE)}))}},A=m,S=(a("1b3c"),a("2877")),T=Object(S["a"])(A,n,i,!1,null,"3ceec5bd",null);e["default"]=T.exports},7046:function(t,e,a){},"72bc":function(t,e,a){},"736a":function(t,e,a){"use strict";a.r(e),a.d(e,"install",(function(){return s}));a("4de4");var n=a("05e6"),i=a("aa34");function s(t){t.filter("extractYear",n["extractYearFromDate"]),t.filter("joinByComma",i["joinByComma"])}},7456:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gallery container-fluid"},[a("div",{staticClass:"row min-vh-100 align-items-center"},[t.hasContent?t._e():a("div",{staticClass:"col"},[a("h1",{staticClass:"text-white text-center"},[t._v(t._s(t.noFilmFoundMessage))])]),t._l(t.cards,(function(e){return a("div",{key:e.id,staticClass:"col-md-4"},[a("FilmCard",{staticClass:"mb-4",attrs:{movie:t.convertMovieData(e)},on:{"film-card-clicked":function(a){return t.onCardClick(e.id)}}})],1)}))],2),t.hasContent?a("div",{staticClass:"row justify-content-center"},[a("button",{staticClass:"btn btn-lg",attrs:{type:"button"},on:{click:t.loadMoreMovies}},[a("span",{staticClass:"m-4"},[t._v(" "+t._s(t.loadMoreLabel)+" ")])])]):t._e()])},i=[],s=a("88bc"),r=a.n(s),o=a("22f9"),c=a("630a"),l=a("f080"),u={name:"FilmCardGallery",components:{FilmCard:o["default"]},data:function(){return{noFilmFoundMessage:l["default"]["EN"].NO_FILM_FOUND_MESSAGE,loadMoreLabel:l["default"]["EN"].LOAD_MORE_LABEL}},props:{cards:{type:Array}},computed:{hasContent:function(){return this.cards&&this.cards.length}},methods:{convertMovieData:function(t){return r()(t,["title","release_date","poster_path","genres"])},onCardClick:function(t){console.log("FilmCardGallery#onCardClick"),this.$emit(c["EVENTS"].FILM_GALLERY_CARD_CLICKED,t)},loadMoreMovies:function(){console.log("FilmCardGallery#loadMoreMovies"),this.$emit(c["EVENTS"].FILM_GALLERY_LOAD_MORE_CLICKED)}}},d=u,_=(a("e20a"),a("2877")),f=Object(_["a"])(d,n,i,!1,null,"192fcb9c",null);e["default"]=f.exports},"8be2":function(t,e,a){"use strict";a.r(e),a.d(e,"MODULE_NAME",(function(){return n})),a.d(e,"STATES",(function(){return i})),a.d(e,"MUTATIONS",(function(){return s})),a.d(e,"ACTIONS",(function(){return r}));var n="detailPage",i={GALLERY_MOVIES:"galleryMovies"},s={SET_GALLERY_MOVIES:"setGalleryMovies",ADD_MOVIES_TO_GALLERY:"addMoviesToGallery"},r={LOAD_MORE_MOVIES:"loadMoreMovies",SEARCH_MOVIES_BY_GENRE:"searchMoviesByGenre"}},"91f4":function(t,e,a){},9687:function(t,e,a){"use strict";a("b13b")},"984b":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("5a7d"),s=a("07a4"),r=a("bb21"),o=a("736a");r["default"].init(),n["a"].config.productionTip=!1,n["a"].use(o["install"]),new n["a"]({store:s["default"],render:function(t){return t(i["default"])}}).$mount("#app")},"9b82":function(t,e,a){"use strict";a.r(e),a.d(e,"mutations",(function(){return r}));var n,i=a("ade3"),s=(a("159b"),a("8be2")),r=(n={},Object(i["a"])(n,s["MUTATIONS"].ADD_MOVIES_TO_GALLERY,(function(t,e){e.forEach((function(e){return t[s["STATES"].GALLERY_MOVIES].push(e)}))})),Object(i["a"])(n,s["MUTATIONS"].SET_GALLERY_MOVIES,(function(t,e){t[s["STATES"].GALLERY_MOVIES]=e})),n)},a00d:function(t,e,a){"use strict";a.r(e),a.d(e,"Empty",(function(){return s})),a.d(e,"With_AppNameLabel",(function(){return r}));var n=a("0418"),i=a("0bb1");e["default"]={title:"Header"};var s=function(){return{components:{Header:n["default"]},template:"<Header/>"}},r=function(){return{components:{Header:n["default"],AppNameLabel:i["default"]},template:'\n    <Header>\n        <AppNameLabel class="text-center w-100"/>\n    </Header>'}}},a349:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid bg-gray px-0"},[a("header",[t._t("header")],2),a("div",{staticClass:"container-fluid bg-gray p-2"},[t._t("toolbar")],2),a("main",[t._t("default")],2),a("footer",[t._t("footer",[a("Footer",[a("AppNameLabel",{staticClass:"text-center w-100 p-1"})],1)])],2)])},i=[],s=a("fd2d"),r=a("0bb1"),o={name:"BaseLayout",components:{Footer:s["default"],AppNameLabel:r["default"]}},c=o,l=(a("c8bf"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,"36313f28",null);e["default"]=u.exports},a8ec:function(t,e,a){var n={"./FilmDetailPage":"6be6","./FilmDetailPage.vue":"6be6","./MainPage":"5a7d","./MainPage.vue":"5a7d","./assets/300x450.png":"1687","./assets/logo.png":"cf05","./assets/posters.jpg":"b3f0","./components/AppNameLabel":"0bb1","./components/AppNameLabel.vue":"0bb1","./components/FilmCard":"22f9","./components/FilmCard.vue":"22f9","./components/FilmCardGallery":"7456","./components/FilmCardGallery.vue":"7456","./components/FilmDetailCard":"fb03","./components/FilmDetailCard.vue":"fb03","./components/Footer":"fd2d","./components/Footer.vue":"fd2d","./components/Header":"0418","./components/Header.vue":"0418","./components/SearchBar":"14ac","./components/SearchBar.vue":"14ac","./components/Toggle":"ae48","./components/Toggle.vue":"ae48","./components/layout/BaseLayout":"a349","./components/layout/BaseLayout.vue":"a349","./config/constants":"630a","./config/constants.js":"630a","./config/i18n":"f080","./config/i18n/":"f080","./config/i18n/en":"0da3","./config/i18n/en.js":"0da3","./config/i18n/i18nKeys":"1682","./config/i18n/i18nKeys.js":"1682","./config/i18n/index":"f080","./config/i18n/index.js":"f080","./core/movieApiService":"bb21","./core/movieApiService.js":"bb21","./filmDetailPage":"be02","./filmDetailPage.js":"be02","./mainPage":"984b","./mainPage.js":"984b","./plugins/filters/extractYearFromDate":"05e6","./plugins/filters/extractYearFromDate.js":"05e6","./plugins/filters/joinByComma":"aa34","./plugins/filters/joinByComma.js":"aa34","./plugins/movieHelperPlugin":"736a","./plugins/movieHelperPlugin.js":"736a","./store/actions":"63e0","./store/actions.js":"63e0","./store/constants":"5609","./store/constants.js":"5609","./store/modules/filmDetailPage/actions":"c714","./store/modules/filmDetailPage/actions.js":"c714","./store/modules/filmDetailPage/constants":"8be2","./store/modules/filmDetailPage/constants.js":"8be2","./store/modules/filmDetailPage/filmDetaiPagelModule":"f92f","./store/modules/filmDetailPage/filmDetaiPagelModule.js":"f92f","./store/modules/filmDetailPage/mutations":"9b82","./store/modules/filmDetailPage/mutations.js":"9b82","./store/modules/mainPage/actions":"0c9f","./store/modules/mainPage/actions.js":"0c9f","./store/modules/mainPage/constants":"5aed","./store/modules/mainPage/constants.js":"5aed","./store/modules/mainPage/mainPageModule":"08dd","./store/modules/mainPage/mainPageModule.js":"08dd","./store/modules/mainPage/mutations":"3594","./store/modules/mainPage/mutations.js":"3594","./store/modules/search/constants":"f24d","./store/modules/search/constants.js":"f24d","./store/modules/search/mutations":"af4a","./store/modules/search/mutations.js":"af4a","./store/modules/search/searchModule":"b900","./store/modules/search/searchModule.js":"b900","./store/mutations":"0439","./store/mutations.js":"0439","./store/store":"07a4","./store/store.js":"07a4","./stories/AppNameLabel.stories":"ba19","./stories/AppNameLabel.stories.js":"ba19","./stories/FilmCard.stories":"13a8","./stories/FilmCard.stories.js":"13a8","./stories/FilmCardGallery.stories":"1170","./stories/FilmCardGallery.stories.js":"1170","./stories/FilmDetailCard.stories":"3af1","./stories/FilmDetailCard.stories.js":"3af1","./stories/Footer.stories":"121a","./stories/Footer.stories.js":"121a","./stories/Header.stories":"a00d","./stories/Header.stories.js":"a00d","./stories/SearchBar.stories":"633a","./stories/SearchBar.stories.js":"633a","./stories/Toogle.stories":"2d69","./stories/Toogle.stories.js":"2d69"};function i(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id="a8ec"},aa11:function(t,e,a){},aa34:function(t,e,a){"use strict";a.r(e),a.d(e,"joinByComma",(function(){return n}));a("a15b");function n(t){return t?t.join(" & "):t}},aa4b:function(t,e,a){},ac58:function(t,e,a){},ae48:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toggle"},[a("label",{staticClass:"label"},[t._v(" "+t._s(t.label)+" ")]),a("div",{staticClass:"btn-group btn-group-toggle",attrs:{"data-toggle":"buttons"}},[a("label",{staticClass:"btn active"},[a("input",{attrs:{type:"radio",name:"options",checked:""},domProps:{value:t.firstOption},on:{change:function(e){return t.onValueSwitched(e.target.value)}}}),t._v(" "+t._s(t.firstOption)+" ")]),a("label",{staticClass:"btn"},[a("input",{attrs:{type:"radio",name:"options"},domProps:{value:t.secondOption},on:{change:function(e){return t.onValueSwitched(e.target.value)}}}),t._v(" "+t._s(t.secondOption)+" ")])])])},i=[],s=a("630a"),r={name:"Toggle",props:{label:{type:String,require:!0},firstOption:{type:String,require:!0},secondOption:{type:String,require:!0}},methods:{onValueSwitched:function(t){console.log("Toggle#onValueSwitched"),this.$emit(s["EVENTS"].TOGGLE_VALUE_SWITCHED,t)}}},o=r,c=(a("40b9"),a("2877")),l=Object(c["a"])(o,n,i,!1,null,"7b4d09a6",null);e["default"]=l.exports},af4a:function(t,e,a){"use strict";a.r(e),a.d(e,"mutations",(function(){return r}));var n,i=a("ade3"),s=a("f24d"),r=(n={},Object(i["a"])(n,s["MUTATIONS"].SET_SEARCH_TEXT,(function(t,e){t[s["STATES"].SEARCH_TEXT]=e})),Object(i["a"])(n,s["MUTATIONS"].SET_SEARCH_BY_OPTION,(function(t,e){t[s["STATES"].SEARCH_BY_OPTION]=e})),Object(i["a"])(n,s["MUTATIONS"].SET_SORT_BY_OPTION,(function(t,e){t[s["STATES"].SORT_BY_OPTION]=e})),n)},b13b:function(t,e,a){},b21a:function(t,e,a){},b3f0:function(t,e,a){t.exports=a.p+"img/posters.04d61fa4.jpg"},b900:function(t,e,a){"use strict";a.r(e);var n,i=a("ade3"),s=a("af4a"),r=a("f24d");e["default"]={namespaced:!0,state:(n={},Object(i["a"])(n,r["STATES"].SEARCH_TEXT,""),Object(i["a"])(n,r["STATES"].SEARCH_BY_OPTION,r["SEARCH_BY_OPTIONS"].TITLE),Object(i["a"])(n,r["STATES"].SORT_BY_OPTION,r["SORT_BY_OPTIONS"].RELEASE_DATE),n),mutations:s["mutations"]}},ba19:function(t,e,a){"use strict";a.r(e),a.d(e,"With_default_value",(function(){return s})),a.d(e,"With_custom_companyName",(function(){return r})),a.d(e,"With_custom_appName",(function(){return o})),a.d(e,"With_custom_companyName_and_appName",(function(){return c}));a("b64b");var n=a("0bb1");e["default"]={title:"AppNameLabel"};var i=function(t,e){var a=e.argTypes;return{components:{AppNameLabel:n["default"]},props:Object.keys(a),template:'<AppNameLabel v-bind="$props"/>'}},s=i.bind({}),r=i.bind({});r.args={companyName:"Microsoft"};var o=i.bind({});o.args={appName:"search"};var c=i.bind({});c.args={companyName:"Macintosh",appName:"find"}},bb21:function(t,e,a){"use strict";a.r(e);var n=a("5530"),i=a("bc3a"),s=a.n(i),r={},o={init:function(t){r=s.a.create(Object(n["a"])(Object(n["a"])({timeout:5e3},t),{},{baseURL:"https://react-cdp-api.herokuapp.com"})),Object({NODE_ENV:"production",BASE_URL:"/vue-mentoring/"}).DEBUG&&(r.interceptors.request.use((function(t){return console.log(t),t})),r.interceptors.response.use((function(t){return console.log(t),t})))},getMovies:function(t){return r.get("/movies",{params:Object(n["a"])(Object(n["a"])({},t),{},{sortOrder:"desc"})}).then((function(t){return t.data}))},getById:function(t){return r.get("/movies/".concat(t)).then((function(t){return t.data}))}};e["default"]=o},be02:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("6be6"),s=a("07a4"),r=a("bb21"),o=a("736a");r["default"].init(),n["a"].config.productionTip=!1,n["a"].use(o["install"]),new n["a"]({store:s["default"],render:function(t){return t(i["default"])}}).$mount("#app")},c1a5:function(t,e,a){"use strict";a("59fd")},c714:function(t,e,a){"use strict";a.r(e),a.d(e,"actions",(function(){return u}));var n,i=a("ade3"),s=a("8be2"),r=a("5609"),o=a("630a"),c=a("f24d"),l=a("bb21"),u=(n={},Object(i["a"])(n,s["ACTIONS"].SEARCH_MOVIES_BY_GENRE,(function(t){var e=t.rootState,a=t.commit,n=e[r["STATES"].SELECTED_MOVIE],i=n.genres[0],u=o["APP_CONFIG"].UPLOADING_MOVIES_CHUNK_SIZE;l["default"].getMovies({search:i,searchBy:c["SEARCH_BY_OPTIONS"].GENRE,limit:u}).then((function(t){var e=t.data;a(s["MUTATIONS"].SET_GALLERY_MOVIES,e)})).catch((function(t){console.log(t)}))})),Object(i["a"])(n,s["ACTIONS"].LOAD_MORE_MOVIES,(function(t){var e=t.state,a=t.rootState,n=t.commit,i=a[r["STATES"].SELECTED_MOVIE],u=i.genres[0],d=e[s["STATES"].GALLERY_MOVIES].length,_=o["APP_CONFIG"].UPLOADING_MOVIES_CHUNK_SIZE;l["default"].getMovies({search:u,searchBy:c["SEARCH_BY_OPTIONS"].GENRE,offset:d,limit:_}).then((function(t){var e=t.data;n(s["MUTATIONS"].ADD_MOVIES_TO_GALLERY,e)})).catch((function(t){console.log(t)}))})),n)},c8bf:function(t,e,a){"use strict";a("aa11")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},e20a:function(t,e,a){"use strict";a("7046")},e402:function(t,e,a){"use strict";a("72bc")},f080:function(t,e,a){"use strict";a.r(e);var n=a("5530"),i=a("0da3");e["default"]={EN:Object(n["a"])({},i["default"])}},f24d:function(t,e,a){"use strict";a.r(e),a.d(e,"MODULE_NAME",(function(){return n})),a.d(e,"STATES",(function(){return i})),a.d(e,"MUTATIONS",(function(){return s})),a.d(e,"SEARCH_BY_OPTIONS",(function(){return r})),a.d(e,"SORT_BY_OPTIONS",(function(){return o}));var n="search",i={SEARCH_TEXT:"searchText",SEARCH_BY_OPTION:"searchByOption",SORT_BY_OPTION:"sortByOption"},s={SET_SEARCH_TEXT:"setSearchText",SET_SEARCH_BY_OPTION:"setSearchByOption",SET_SORT_BY_OPTION:"setSortByOptionn"},r={GENRE:"genres",TITLE:"title"},o={RELEASE_DATE:"release_date",RATING:"vote_average"}},f92f:function(t,e,a){"use strict";a.r(e);var n=a("ade3"),i=a("9b82"),s=a("c714"),r=a("8be2");e["default"]={namespaced:!0,state:Object(n["a"])({},r["STATES"].GALLERY_MOVIES,[]),mutations:i["mutations"],actions:s["actions"]}},fb03:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("img",{staticClass:"card-img",attrs:{src:t.imageUrl},on:{error:t.setDefaultImage}})]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"card-text"},[a("h1",{staticClass:"pr-3"},[t._v(t._s(t.title))])]),a("div",{staticClass:"card-text text-center"},[a("span",{staticClass:"border rounded-circle p-2 h1"},[t._v(" "+t._s(t.rate)+" ")])])]),a("div",{staticClass:"row p-1"},[a("p",{staticClass:"card-text"},[a("small",[t._v(t._s(t._f("joinByComma")(t.genres)))])])]),a("div",{staticClass:"row p-1"},[a("div",{staticClass:"pr-3"},[a("span",{staticClass:"spec"},[t._v(t._s(t._f("extractYear")(t.releaseYear)))]),a("span",{staticClass:"card-text small"},[t._v(" "+t._s(t.year))])]),t.duration?a("div",{staticClass:"pl-3"},[a("span",{staticClass:"spec"},[t._v(t._s(t.duration)+" ")]),a("span",{staticClass:"card-text small"},[t._v(" "+t._s(t.min))])]):t._e()]),a("div",{staticClass:"row p-1"},[a("p",{staticClass:"card-text"},[t._v(" "+t._s(t.description)+" ")])])])])])])},i=[],s=a("f080"),r=a("630a"),o=r.APP_CONFIG,c={name:"FilmDetailCard",props:{movie:{type:Object,require:!0}},data:function(){return{year:s["default"]["EN"].YEAR,min:s["default"]["EN"].MIN}},computed:{title:function(){return this.movie.title},imageUrl:function(){return this.movie.poster_path},rate:function(){return this.movie.vote_average},genres:function(){return this.movie.genres},releaseYear:function(){return this.movie.release_date},duration:function(){return this.movie.runtime},description:function(){return this.movie.overview}},methods:{setDefaultImage:function(t){t.target.src=a("a8ec")("./".concat(o.DEFAULT_IMAGE_PATH))}}},l=c,u=(a("e402"),a("2877")),d=Object(u["a"])(l,n,i,!1,null,"e60ff032",null);e["default"]=d.exports},fd2d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid p-1"},[t._t("default")],2)},i=[],s={name:"Footer"},r=s,o=(a("9687"),a("2877")),c=Object(o["a"])(r,n,i,!1,null,"46c712fb",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-common.44c45937.js.map