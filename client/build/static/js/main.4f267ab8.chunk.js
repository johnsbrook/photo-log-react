(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),s=n(35),i=n.n(s),l=(n(43),n(36)),r=n(2),u=n(3),d=n(4),j=n(6),h=n(5),b=(n(44),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).clickOnLogo=function(e){window.location.replace("/")},e.clickOnProfile=function(e){window.location.replace("/")},e.clickOnLogAPhoto=function(t,n){"none"==(n=document.querySelector("#imageUploadForm")).style.display?e.showImageUploadForm(n):e.hideImageUploadForm(n)},e.clickOnAlbums=function(e){console.log("You've clicked on",e.target.innerText)},e}return Object(d.a)(n,[{key:"showImageUploadForm",value:function(e){e.style.display="block",e.classList.add("d-flex")}},{key:"hideImageUploadForm",value:function(e){e.style.display="none",e.classList.remove("d-flex")}},{key:"hideLogAPhoto",value:function(){console.log(document.querySelector("#logAPhoto"))}},{key:"render",value:function(){return this.hideLogAPhoto(),console.log(window.innerWidth),Object(a.jsx)("nav",{className:"navbar sticky-top shadow",children:Object(a.jsxs)("div",{className:"container d-flex justify-content-center align-items-end",children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAA2CAYAAACbSzhRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMDoxMToxOCAyMzoxNjo0MhZ7QuYAABQ6SURBVHhe7Z0JlBxFGcezuzlIAiRchityBDnCoXLfKIhcwgPllCCHgsJDVBCVMxwCT1BAkEsQ5T7lkktQIkEQARF4kXCHQIBwhCRsspvsJou/f/U3tVNTPTM9szubGPv3Xr2q+r6vvqrurumjqrqnX05OTk5OTmU+/fTTAV1dXcsRRpMeKBnpzQmrkW9xRjk5/yvQaZs6Ojo2pQOfMn/+/DvmzZv3JjIH6aeImtFtgm6+ZERziJ4hPgf5dqT7m6ucnIULOufqdNQLCW+p85aCnD7ctQXJJtKPJ9IYdO8RzsJ2NXOdk7NgoTOuR6e8mTDP+mkq6K83+2+aqCLyR7hq1qxZK7iKcnL6GjrrUDrhuYQO65dlwWYW9iupDLcsb5s4E5RtpdxxJJut6pycxkOn25TOOjnphtXB/mSVo8OebqKaoezD+Vk9p0+gwx5Kh9PDYiawfZMygwmrkG4zcV1Qfip+Pm9Nycnpfehgx1t/ywxl9lZZOugtJuoR+PkYn1u5BuXk9Cb1dHD4G0FDitvRObsSUc/B1ydEX7Cm5eT0HO6/xyTdKzt0RI22fIHQQvrfTtiL4HMy9+jLWxNzcuqHM/gGdKjZ1rcyQ5krVJ4fyBEm6nXwPZ4oH3XJ6Rl01t8lXaomZvDjWI54GB3xg0TUGPD/fWtqTk5ZmiyOoKMOJVqBvvSf5uZmt+YkC9gfh/35us1pamr6tokbxSzq2J/6Zls+JycbdPCNOYtfpTTxue60mQE69stEA5yTnJyFhNQzOR37TqLdOUtuSvwqHfdVzpYjnLIC2O2G3f2WrZk5c+asPXDgwO0tWwsPUO8kSy9UsE+GELTvlqCNLyTSnL4k6uScxbUkdgIHRIupxre0tHyJ+BDiq80kFcrdj81ulq0LfCxJeBU/nzFRJihzNWXqvjVie7X6cWu2cxt+2OuRXpOwhAUxizCD8Br6CVyxHhowYMDTpLuctgTNzg4dOvQHtGsHshuyL5vx3Ukbh1BmXmK1aMI26we9CWElwhzCS2zzM4T5pBcOOBhnctCL2YfQwoF9OsnGoOvQWdhc9Ah20nfMbWZocxvlljYXmaHMaMpeRZhurjJDmUlst9oajfDIb2IVsayZLHK0t7evyj75IyFarMd+msg+2cxMFzw06CVrm4NGT6aBmprfinTqpA7y8614j8FdC+EZ57g2DjEXVWFblqHNNxS2h1j8nXAGur21rYTRCh0dHdticgS6OwnRAUR2C3aDzLUD8aqJthvsOokWyZdE2EebsX3vJ1uaDnotttNVcsFCI9ayNgUgLyyyusFEHn4UH06fPn24c9BLUN821FXTLCn2N1nxiuBbL21MtTLthAuQ6dJaFey2xD466yP7hZk4sFvPVB5sXjf1IgXbuhzb5vZnMcg+IlxI8lbiwsnkQSu24KDDfkuNKYXGFZbLrkw6mBxC9l0r3qtQz81WRSawn2pFy0JbR2Hnxu7Z1hfIr2sq6QYj+w76OwhvEN63cKaZOLA50FVYBDadlF/OTPp1dnbuaCoPNnU/kNcD7VmJM+w2xPsRar6VywrbdbltogfZdOocZSayOcfk85AvaeIFA43QLy8VdNfJhkaeaiLJniNqyCWYekbiv6aVi5SpuBwXf9fLjnjCjBkzggNP5z3JOSkB27vNxIFoALJZiTbA3y7RjiNN5qHMOaZuKNSjN7Q0lOuhPduaulfB7xJp+wL5sWbiIL+pqaRbw8QLBtqgRVWpsDG0r2szwmDSbj056e2saEPA/1hXeUZ0BrWiEfjSix7unpr0Lib2IFbnnSZ9MciuNBMPsmdN7UF2hqmlv9jEHn5E+5i6oVD3h1alh+39qqnrBh/74lvPH2NMJNmuVoUHm7lES5mJA7stE61rS2HEqs8IRgZogL/klqIhRfQXNTU1zSH9Y0S3ET+aaBsDdZ1HnW9btiotLS2rWjICX5+jvYWrzj8t9qDvJHo/yXWDPG1sO22GdYjF2lfrW9KD7BlLNpq02elou2qF/rkH27Av8dYm0r7RPEop45FPt7SDvLuScCyfx0erE/YhQSdnAyo+QNKJdNk5iOTtxN9LpI2DndNGON6yWVjc4gja6+cE2NlfsWQpaSsbn7K4mOi+kna6ZwLq0T4NlgJT3wcc3IZPVlndg5NcAnVrLP+1JNcj3L5hOye6XEJ0UkE/zpIOqtfI3NFK077oqtgXBJ2cBg6zZFloqO4th3LQPk4kjYU23cpOesyy1Sh7KdTBwU+bpX9P+jiC1uc42K7l2abSy6wmM55LcgnWkVZPcgFu9AS97jlL9+OTFkuvK6Ie4jNPeFFmOGFtyqxI2I2wH/noB41sBNsQLKtA9jKyimt7sNG3cUYSRhHWJYwhaEKnGDeZg9wPl5JOOyn4bRX4Po/6tb0vcpL8rYk9yDUBuBZB27YT4QCel4LjUAo+tQ9XJoxU2sTZ4H7qYwpVBbufW5E+gY3ZkDorfhFAYHeiFUkFH2eYqQN7/zod6bT7y+jHpe/KmNqD3UzKuzMocTT6wv34T5EvTRiLrX8/lvRfiFKvPtjqoe5Myvpv1xSD7j/YuB8p8V7kx2Grb9sEIJ8mnYWHEBVf0bZHdg8heiEdGeouP4tM/iKT+wdx0k84Y4O8vqfjf+CU/4nJNTq3gYklH0o4Ffkr0peC/LW0YWmVQ6cX6D8yU9lqGFjPCt8l1sTec4R3COm3ueykN6xsRXCgGcY+/TaKNsCqLwttOsrMU8FE0+sXELoI6jx+ZEg73TkpApuzTe1BdpOpPcguMrXvDMUg+zUheiAU1BvdjiHbgGPhv2FDuoPyd1vWg93hZp/pzS18uFsJklqyoVGY4rkIfeTpNUs7yL9H5PYRdWxlMpJdB0pG+gXJCtBOdyuDXmPn10lG3E7eL/dAtDay16UTpDsJf7SshzLBfiGvCbygPoFMP+LUE6AVDUFey0zjrVasYbBhGrs+1NIjSM+0ulPB5puuYBXmzp27gV7Ls6yDHfVnc+PB366mdlD/4abyUO5l7PxtDzY1zdZS/jYr6sDXSHwEkyvItA4m6siUvd3KbEE4hvx9pvJ0dnZqBlezt5u1t7e7ExN2Z5naQX5Ka2vrZ4jTruT++QL9ZRIQ6yTxaOnxQDaBcBPBDf0STynez3qbC1nwASraNZZwlGU92D1kxQo/ynGJJoG8xtz3kp5YbddrkR7yM13hUlBcYzaZwHmjhxD1ubnZxCsrz079sVWdCnZ1veRMUa3NiX5A+FPn2o6wM+3QpdB93q4AZV5Cp8VcDkRDMNH0vYf8dMKZNvV9hYk9yO6y4g7ywRmbvDqFhjf1sB+A7Gkr5iD/oKkc5Gle1zKmdpDXMurgzIdM4/prJ7mIPa2otk+f+dNtRnuiSgd9K+HXJINbDmQ3JhYJ5D/An4ako6s0slesmNp8kIk96C8ztfSDTexBn/6wjXHFTlQKjho5GaTZVTfRQHyDZCQH0LHK3cepA5YdXakE5fQ+amZUF2hiKTiItHn7xKIb7PwkEPq0K8EFppZ+cxN70J8lHbG7/BeDbBLRnpQ7nvTlhNZEk0A+WkqArPSHoB/lcHyskkhC0P8CnT5FcjbBtRXxsmW25Xrk+kpa9OCIfP3EqhvsL5WOOJpXQDaNMrsTjiMd3UYj9+tgSK9pYg9lHjZ1CMbbmE1m6HRHWPFehUa62UlBmqZ1bSk58ddMHEA7XnQF6wCfPzA3Huq8m3AR4TGCLsMKuqU5Dfu1rGgA8lOS0gH+TEj5C0zmoczBppY+et2wMMGF3a7oy67nQRedXZEFt5T40PdvgqsR2X+YWvXrvdlU0OkW5S9mKl9LmMqBTvUvZuoI9NGzCj6+Lh1JLXMOroCVwFa3c8UP0Lskmm6wcT+gCHR6uz7TCEsBOpfWglQdeqwFGq2FUMEBpR4t9XVDnugeSKTdILvcFa4Dyv7J3HgKB6AW8BOcJQ0/zIb+MZN5qOdzppY+7ctk/uqErUZDriW4UQ3iV5AdQ9iEcKizLgKZW1hXgPxhpvLg45em7qehO2xORHYvYYrpr0S2d+nXEZCNcg4M7CoO83L8JpqpBx/+RRzSOuZXE8YTurDX6tdjSactNSn98R5jco9kpo7BaXDflAXK+B3VU3DXbB06Dbc+hA1YB5tg2AvZl52DGqFodD+unQw1vbhBMbV7RuIhAT+TTS297quDxW3kp5ha26SXvwPQ62WNCGzdSAfxqSbScYsu+VwFdje1A5vfmMqDj9TJNmwftH3sZ3KLoVxwa4Z92WFlbDX0F5y0yOu5ILrVxdat4ETvbo2Iz1e+GGTBqBd53f8HFC/xCCaDRFNTk/sCbS3gU2cT/wDWE2jwwS0tLRtbNoA69B1zvUY2kXZeYmLJp5Ifb9maoO0bUl/pDOYb1PGBpTOBn9H4Kb2i+dlS9OvjM+gw5J+wpMbfgwdEI3XCDV+FW6C/WiyilxJozwRLFshUB/51T/1l9unjBDeBloJfZSg4BpWWeCzNtpZO2szEd/S2EH7ctqEr3FNHdwnoPrRkgej2sXjb0zr5n6noLctmAocD2DG/smzdqANTfzQ2XYAdtTz6kyx9Oj+Ij5yiX7/fIa/39Sq/FqOIZy2uhc0t9tCmYj+Rnn3mZwcHDRoU3c+iTzvTaVb3UOJ38O/up7HTLKefbBHsm7noS49jMOVvRH0Af0eyfwdS/hblqetb+HuW4EZliHVb9RNnDOQ7+/fv/7hl08hUL/UMps6jiKcRF+7//fBsEaU/zOAES/kPaf97lk3t5PMJ+obhvrUEnF7Lhpd98MgC5U9WR7ZsKmzADwmjaOMMbE8h/Qnput9Mos5o2BF//7JkZvCTtljJLwlAv5Eli/m3xdJH47q0Y1nkpQuufsh2L4PuUkLhHdNRyIK3k2Ay+uCHj43eUw3AJnhhhPq0hOBYdTSyNxCPxeYayn6R4H50xJ8l+CWz6J8ilDvji6heymtEJ+jA5I9CruXSl+OvI5GmLobzPxrzsUqS8yycL4zT2DV09mEHVwU7fU1AB0T3026yqF7w9W7itRvu575m6szgJ1p+C581tR68oil3tnm0dCT1yp9mY4MJDVF8X429XkGcqzaT9ut0SO9s5h5s/O0b2cKsZdqEkn+gJ9bAgxunx1ZLETTL6EY9aP9h5EcQ9G3LYFvIa7gvmDgrBZvo9TjK7G9q1b0RNm0EvXDh1/qTPjGx7gYb94U2UWaZxXmmdpRd3IKtFgS51WONhF/sxfx6X6ZhdxPvYeKq0L6vYF98T1ozbN8q1P+mZYtZrYw8FdoykPa3ctvmz7r4bqN9i+PHTS+jn0I+OGsiOwm9hkbfpazeI70JG3/gBX7ew0YjDBqJOEI+ifdC5ieRsDmA/I2WdSB7B9ujiTULrDO9OsPqBC3YCo47NrdRXn9zsx86zZ4+J3tUugUqLBHWMtt7iHcj/j364DmGMrqqnIX8dHxFt45s2xXoguFminyErR4sNd/wPfkkfQjxNYmFs9kcGz/MKZDpLK+OrIf1/dl3QVuQjcGHm1upCIaaSr2XuJFoCrxFT8JJNju0TesYotutWmBnfT3x1g1+dTWpaYILP9G7sfgJHvrIP2+qAOSantb6fPnR1wMqfv8dGz+iUgBZNAlVQP6JTiO4bSJfcVYb/RT8ucs/8ZLkgwmmYtBpTU0wTU9ei86iW058rYYu7Y0qD3o/MVYAcRNXkUrj99HVn7pS5zFSwVjrRbRIp9ehcbh3k0/9SU9IpNmhjP+11wvbFk3eIIteqKhGmUume2grwLYeayoPNo8gD0aSyO9BG6IlBthqJV/qGn7UGp78V2LZDbLxlAkeeMlrOC9a4yLUmdAH97fkx2AfvYaI7C10OxJWIq2ZVw9+NF1/MMngZIHsq9hG8zDI5qDT/km9s0CntSnBHIPqp55vEz9qIgcyDeMGJ7+ytysFKLARlfyN039dU+blwOfNXGYOID6ay9HFJs4EG6Y3TLYgtJuoLqhbl+T1qL+Vq8nU/v37v4TP0uGpquh90WHDhu3AvtJbLxoZmEQojPx4qO8b2GyFbhr13Tto0KDnTRWAncboZbsW7dGZXUOmdxHSFx0BZfQApsmeNbB7G/8P4b/sAxj2OvtrbmE49u8Sj6OuYC14AX0saciQIbpd0UsSc7DXx4IeILiHTeT6978nOJ7BV9ao4w1srqXjjWPfaumrHhh1z70Hcn2np5NYa1TupG496FaEcloarbX8b1JO26ZZ2OnUW7y89z7yNT9TqeDONLTqn2BlhYZpqa4W6evBJnqvshLYT2prayt9ms5ZwHAs9ZnvqscSm9OsSI/QDCx1RjO4yH5kJrVD4Z1oYNn7s1rA11j5xF80A1cJdXDK5h18IYVjowVmwaxvKRzDip8brAZ1aEXoI4RgDY5ApLXrPfsDNRxomWY05FYLlNeDyhB86T9AUxe7p4Ht05QZaU3JWUjhGI3mqh+tUxEcQz03VHy1rRyUG0b52wl6yeI2bsf07BL8iwnyutcvBbARI3B2v/mtGcrvJz/4+KuJsvAHyqXNmuUshHC8FuN4+SWyxDMJl5CseyEf5QuLxtxLHPjXg60H3avIeu/DRfjUi6RH47imFYvYayhIZfdKJJXRRvFr7ZPvleQ0Bo512rR8TeDDvRRBf9CYul7cOLz4GRG5RnrWMfPeBf9LUYHemaw6U4mNbk02IixGOniXsBT0nxC0WL/3fpk5/9PQqV+nT2g0pfQ1t7voJ5m+ZdkjqEQzTz+jwtQ3ywU6988V2J5goghs9GCpz7XVdd+Ws+hCv9iYjv4kfUTfp5xIuLKjoyNa9NZw6JzNBI2rn0Aj9IkE90IusT7ZMGL27NkrIve/RNKzCHrzRmft0u985OT0ClUng3oKfXlxwvDm5mZNF3++qalJyyL1eQatydA/N9S7RDYnJycnJyfn/4B+/f4LrM1vrP0Lx9oAAAAASUVORK5CYII=",className:"logo",id:"logo",alt:"logo",onClick:this.clickOnLogo}),Object(a.jsxs)("div",{className:"links d-flex",children:[Object(a.jsxs)("div",{className:"ml-5 px-4 profile",onClick:this.clickOnProfile,children:[Object(a.jsx)("i",{className:"far fa-user-circle"}),"\u2003",Object(a.jsx)("span",{className:"linkText",children:"Profile"})]}),"/LogPhoto"==window.location.pathname?[]:Object(a.jsxs)("div",{className:"px-4 logaphoto",onClick:this.clickOnLogAPhoto,id:"logAPhoto",children:[Object(a.jsx)("i",{className:"fas fa-camera"}),"\u2003",Object(a.jsx)("span",{className:"linkText",children:"Log a Photo"})]}),Object(a.jsxs)("div",{className:"px-4 albums",onClick:this.clickOnAlbums,children:[Object(a.jsx)("i",{className:"fas fa-map-marker-alt"}),"\u2003",Object(a.jsx)("span",{className:"linkText",children:"Albums"})]})]})]})})}}]),n}(c.Component)),m=(n(45),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).clickOnProfile=function(e){window.location.replace("/")},e.clickOnLogAPhoto=function(t){"none"==(t=document.querySelector("#imageUploadForm")).style.display?e.showImageUploadForm(t):e.hideImageUploadForm(t)},e.clickOnAlbums=function(e){console.log("You've clicked on",e.target.innerText)},e}return Object(d.a)(n,[{key:"showImageUploadForm",value:function(e){e.style.display="block",e.classList.add("d-flex")}},{key:"hideImageUploadForm",value:function(e){e.style.display="none",e.classList.remove("d-flex")}},{key:"render",value:function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("div",{className:"d-flex justify-content-center align-items-end",children:Object(a.jsxs)("div",{className:"links d-flex",children:[Object(a.jsxs)("div",{className:"pr-4 profileFooter",onClick:this.clickOnProfile,children:[Object(a.jsx)("i",{class:"far fa-user-circle"}),"\xa0\xa0",Object(a.jsx)("span",{class:"linkText",children:"Profile"})]}),"/LogPhoto"==window.location.pathname?[]:Object(a.jsxs)("div",{className:"logAphotoFooter",onClick:this.clickOnLogAPhoto,children:[Object(a.jsx)("i",{class:"fas fa-camera"}),"\xa0\xa0",Object(a.jsx)("span",{class:"linkText",children:"Log a Photo"})]}),Object(a.jsxs)("div",{className:"pl-4 albumsFooter",onClick:this.clickOnAlbums,children:[Object(a.jsx)("i",{class:"fas fa-map-marker-alt"}),"\xa0\xa0",Object(a.jsx)("span",{class:"linkText",children:"Albums"})]})]})})})}}]),n}(c.Component)),p=(n(46),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleMouseOver=function(e){e.target.style.backgroundColor="red"},e.handleMouseOut=function(e){e.target.style.backgroundColor="transparent"},e.handleOnClick=function(t,n){"none"==(n=document.querySelector("#profilePictureUploadForm")).style.display?e.showProfilePictureUploadForm(n):e.hideProfilePictureUploadForm(n)},e}return Object(d.a)(n,[{key:"showProfilePictureUploadForm",value:function(e){e.style.display="block",e.classList.add("d-flex")}},{key:"hideProfilePictureUploadForm",value:function(e){e.style.display="none",e.classList.remove("d-flex")}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-12 mx-auto",onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,onClick:this.handleOnClick,children:"Picture Component"})})})})}}]),n}(c.Component)),f=n(8),O=n.n(f),x=n(13),v=n(18),g=n(15),y=n.n(g),k={getAll:function(){var e=Object(x.a)(O.a.mark((function e(){var t,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/description");case 2:return t=e.sent,n=t.data.length-1,a=t.data[n],e.abrupt("return",a||[]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};n(32);function N(){var e=Object(c.useState)(null),t=Object(v.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){n||s()}));var s=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAll();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:n?Object(a.jsx)("p",{children:n.description}):Object(a.jsx)("p",{children:"Please, enter profile description"})})}var C=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleOnMouseOver=function(e){console.log("You moved the mouse over ".concat(e.target.innerText))},e.handleOnMouseOut=function(e){console.log("You moved the mouse out of ",e.target.innerText)},e.handleOnClick=function(e){console.log("You clicked on ".concat(e.target.innerText,"."))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-12",onMouseOver:this.handleOnMouseOver,onMouseOut:this.handleOnMouseOut,onClick:this.handleOnClick,children:Object(a.jsx)(N,{})})})}}]),n}(c.Component),w={getAll:function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/status");case 2:return t=e.sent,e.abrupt("return",t.data||[]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};n(66);function A(){var e=Object(c.useState)(null),t=Object(v.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){n||s()}));var s=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAll();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:n?n.map((function(e){return function(e){return Object(a.jsxs)("p",{children:[e.timestamp,Object(a.jsx)("br",{}),e.status]})}(e)})):Object(a.jsx)("p",{children:"There are no updates on your timeline."})})}n(67);var T=n(17),P=n(9),L=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={status:""},a.onChangeHandler=a.onChangeHandler.bind(Object(P.a)(a)),a}return Object(d.a)(n,[{key:"onChangeHandler",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"onCancelHandler",value:function(e){console.log(e.target.innerText)}},{key:"postStatus",value:function(e,t){fetch("/api/status",{method:"post",body:JSON.stringify({status:this.state.status}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(t.json()).catch((function(e){t.json(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.postStatus.bind(this),className:"my-5 mx-auto text-center col-12 col-md-4",children:[Object(a.jsx)("textarea",{type:"text",name:"status",placeholder:"What's on your mind?",className:"col-12 mb-2",style:{height:"4em"},onChange:this.onChangeHandler}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"Send Update",className:"btn btn-primary shadow-sm"}),"\u2003",Object(a.jsx)("button",{className:"btn btn-danger shadow=sm",onClick:this.onCancelHandler,children:"Cancel"})]})}}]),n}(c.Component),F=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={description:""},a.onChangeHandler=a.onChangeHandler.bind(Object(P.a)(a)),a}return Object(d.a)(n,[{key:"onChangeHandler",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value)),console.log(e.target.value)}},{key:"onCancelHandler",value:function(e){console.log(e.target.innerText)}},{key:"postDescription",value:function(e,t){fetch("/api/description",{method:"post",body:JSON.stringify({description:this.state.description}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(t.json()).catch((function(e){t.json(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.postDescription.bind(this),className:"mb-5 text-center mx-auto col-12 col-md-4",children:[Object(a.jsx)("textarea",{type:"text",name:"description",placeholder:"Update profile description.",className:"col-12",style:{height:"4em"},onChange:this.onChangeHandler}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"Update Description",className:"btn btn-primary shadow-sm"}),"\u2003",Object(a.jsx)("button",{className:"btn btn-danger shadow-sm",onClick:this.onCancelHandler,children:"Cancel"})]})}}]),n}(c.Component),U=(n(68),n(15)),D=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleOnCancelClick=function(e){(e=document.querySelector("#imageUploadForm")).style.display="none",e.classList.remove("d-flex")},a.handleHeaderChange=function(e,t){console.log("handleHeaderChange read")},a.state={file:null},a.onFormSubmit=a.onFormSubmit.bind(Object(P.a)(a)),a.onChange=a.onChange.bind(Object(P.a)(a)),a}return Object(d.a)(n,[{key:"onFormSubmit",value:function(e,t,n){e.preventDefault(),this.onAPIChange(),(t=new FormData).append("upload",this.state.file),n={headers:{"content-type":"multipart/form-data"}},U.post("/upload",t,n).catch((function(e,t,n){t.json(n)}))}},{key:"onAPIChange",value:function(){var e=this,t="/image";fetch(t).then((function(e){return e.json(t)})).then((function(n){var a=n.length;e.validationAPI(a,t)}))}},{key:"validationAPI",value:function(e,t){var n=this;fetch(t).then((function(e){return e.json(t)})).then((function(a){a.length>e?window.location.replace("/LogPhoto"):n.validationAPI(e,t)}))}},{key:"onChange",value:function(e,t,n,a,c){this.setState({file:e.target.files[0]}),a=(t=e.target.value).split("\\"),t=a[a.length-1],document.querySelector("#previewFileName").innerText="Would you like to upload ".concat(t,"?")}},{key:"render",value:function(){return Object(a.jsx)("form",{onSubmit:this.onFormSubmit,className:"text-center mx-auto imageUploadForm justify-content-center align-items-center text-white",style:{border:"1px solid lightgrey",display:"none"},id:"imageUploadForm",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("label",{className:"btn btn-secondary col-12 col-md-6 mx-auto",children:["Select Photo",Object(a.jsx)("input",{type:"file",name:"upload",style:{display:"none"},onChange:this.onChange}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{className:"col-10 mx-auto",children:[Object(a.jsx)("button",{type:"submit",className:"btn btn-primary mb-2 col-4 col-md-2",children:Object(a.jsx)("i",{class:"fas fa-check"})}),"\u2003",Object(a.jsx)("button",{className:"btn btn-danger mb-2 col-4 col-md-2",onClick:this.handleOnCancelClick,children:Object(a.jsx)("i",{class:"fas fa-times"})}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{id:"previewFileName",className:""}),Object(a.jsx)("br",{})]})]})})}}]),n}(c.Component),S=(n(69),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={file:null},a.onFormSubmit=a.onFormSubmit.bind(Object(P.a)(a)),a.onChange=a.onChange.bind(Object(P.a)(a)),a}return Object(d.a)(n,[{key:"onFormSubmit",value:function(e,t,n,a){e.preventDefault(),this.onAPIChange(),(n=new FormData).append("profilepictures",this.state.file),a={header:{"Content-Type":"multipart/form-data"}},y.a.post("/profilepictures",n,a).then(this.windowReload).catch((function(e){t.json(e)}))}},{key:"onAPIChange",value:function(){var e=this,t="/image";fetch(t).then((function(e){return e.json(t)})).then((function(n){var a=n.length;e.validationAPI(a,t)}))}},{key:"validationAPI",value:function(e,t){var n=this;fetch(t).then((function(e){return e.json(t)})).then((function(a){a.length>e?window.location.replace("/"):n.validationAPI(e,t)}))}},{key:"windowReload",value:function(){window.location.reload()}},{key:"onChange",value:function(e,t,n,a,c){this.setState({file:e.target.files[0]}),a=(t=e.target.value).split("\\"),t=a[a.length-1],document.querySelector("#previewProfilePictureFileName").innerText="Would you like to upload ".concat(t,"?")}},{key:"onHandleCancelClick",value:function(e){(e=document.querySelector("#profilePictureUploadForm")).style.display="none",e.classList.remove("d-flex")}},{key:"render",value:function(){return Object(a.jsx)("form",{onSubmit:this.onFormSubmit,className:"col-12 p-1 mx-auto text-center justify-content-center align-items-center profilePictureUploadForm",style:{border:"1px solid lightgrey",display:"none"},id:"profilePictureUploadForm",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("label",{className:"btn btn-secondary col-12 col-md-6",children:["Select Photo",Object(a.jsx)("input",{type:"file",name:"profilepictures",className:"profilePicturesInputBtn",onChange:this.onChange})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"col-10 mx-auto",children:[Object(a.jsx)("button",{type:"submit",className:"btn btn-primary mb-2 col-4 col-md-2",children:Object(a.jsx)("i",{class:"fas fa-check"})}),"\u2003",Object(a.jsx)("button",{className:"btn btn-danger mb-2 col-4 col-md-2",onClick:this.onHandleCancelClick,children:Object(a.jsx)("i",{class:"fas fa-times"})}),Object(a.jsx)("br",{})]}),Object(a.jsx)("label",{id:"previewProfilePictureFileName",className:"col-12"})]})})}}]),n}(c.Component)),H=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"container contents",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)("section",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-4 col-12 image d-flex align-items-center justify-content-center",children:Object(a.jsx)(p,{})}),Object(a.jsx)("div",{className:"col-md-8 col-12 description",children:Object(a.jsx)(C,{})})]})})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"newUpdateMessage col-12 d-flex align-items-center justify-content-center",children:Object(a.jsx)("section",{children:"Buttons for a new update message"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"gallery col-12 d-flex align-items-center justify-content-center",children:Object(a.jsx)("section",{children:"Carrousel or Collage"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"updateMessages col-12 d-flex justify-content-center",children:Object(a.jsx)("section",{children:Object(a.jsx)(A,{})})})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(L,{}),Object(a.jsx)(F,{}),Object(a.jsx)(D,{}),Object(a.jsx)(S,{})]})]})}}]),n}(c.Component),q={getAll:function(){var e=Object(x.a)(O.a.mark((function e(){var t,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/image");case 2:return t=e.sent,n=t.data.length-1,a=t.data[n],console.log(n),console.log(t.data[n]),e.abrupt("return",a||[]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};n(33);function B(){var e=Object(c.useState)(null),t=Object(v.a)(e,2),n=t[0],o=t[1];console.log(q),Object(c.useEffect)((function(){n||s()}));var s=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.getAll();case 2:t=e.sent,console.log(t),o(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"px-1",children:n?Object(a.jsx)("img",{src:"/image/"+n.filename,alt:n.filename,className:"imagePreview"}):Object(a.jsx)("p",{children:"No Image"})})}var I=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={title:"",location:"",description:"",URL:""},a.onChangeHandler=a.onChangeHandler.bind(Object(P.a)(a)),a}return Object(d.a)(n,[{key:"onChangeHandler",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value)),console.log(e.target.value)}},{key:"onFormSubmit",value:function(e,t){fetch("/api/loggedphoto",{method:"post",body:JSON.stringify({title:this.state.title,location:this.state.location,description:this.state.description,URL:this.state.URL}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(t.json()).catch((function(e){t.json(e)}))}},{key:"onCancelHandler",value:function(){window.location.replace("/")}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container logPhotoContainer",style:{marginBottom:"7em",marginTop:"8.5em"},id:"logPhotoContainer",children:[Object(a.jsx)("h4",{className:"text-center py-3",children:"Log Your Photo"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-12",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-12 col-md-5 d-flex align-items-center",children:Object(a.jsx)(B,{})}),Object(a.jsx)("div",{className:"col-12 col-md-7 d-flex align-items-center",children:Object(a.jsxs)("form",{className:"col-12 col-md-12 mx-auto",onSubmit:this.onFormSubmit.bind(this),children:[Object(a.jsx)("label",{className:"pt-3",children:"Title"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"col-12",type:"text",name:"title",placeholder:"How would you like to name this picture?",onChange:this.onChangeHandler}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{className:"pt-3",children:"Location"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"col-12",type:"text",name:"location",placeholder:"Where was this picture taken?",onChange:this.onChangeHandler}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{className:"pt-3",children:"Description"}),Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{className:"col-12",type:"text",name:"description",placeholder:"Say something about this picture",onChange:this.onChangeHandler}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"col-12",type:"text",name:"URL",onChange:this.onChangeHandler}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn btn-primary col-3 col-md-2 my-2 px-2",children:Object(a.jsx)("i",{class:"fas fa-check"})}),"\u2003",Object(a.jsx)("button",{className:"btn btn-danger col-3 col-md-2 my-2 px-2",onClick:this.onCancelHandler,children:Object(a.jsx)("i",{class:"fas fa-times"})})]})})]})})})]})}}]),n}(c.Component);var J=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(b,{}),Object(a.jsx)(r.a,{exact:!0,path:"/",component:H}),Object(a.jsx)(r.a,{exact:!0,path:"/LogPhoto",component:I}),Object(a.jsx)(m,{})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),Y()}},[[75,1,2]]]);
//# sourceMappingURL=main.4f267ab8.chunk.js.map