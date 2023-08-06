"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={title:"Defining start conditions for the container"},l=void 0,i={unversionedId:"part-1/section-4",id:"part-1/section-4",title:"Defining start conditions for the container",description:"Next, we will start moving towards a more meaningful image. youtube-dl is a program that downloads youtube videos . Let's add it to an image - but this time, we will change our process. Instead of our current process where we add things to the Dockerfile hope it works, let's try another approach. This time we will open up an interactive session and test stuff before \"storing\" it in our Dockerfile. By following the youtube-dl install instructions we will see that:",source:"@site/docs/part-1/section-4.md",sourceDirName:"part-1",slug:"/part-1/section-4",permalink:"/part-1/section-4",draft:!1,editUrl:"https://github.com/docker-hy/docker-hy.github.io/blob/master/docs/part-1/section-4.md",tags:[],version:"current",frontMatter:{title:"Defining start conditions for the container"},sidebar:"materialSidebar",previous:{title:"In-depth dive to images",permalink:"/part-1/section-3"},next:{title:"Interacting with the container via volumes and ports",permalink:"/part-1/section-5"}},s={},u=[{value:"Improved curler",id:"improved-curler",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Next, we will start moving towards a more meaningful image. ",(0,o.kt)("em",{parentName:"p"},"youtube-dl")," is a program that downloads youtube videos ",(0,o.kt)("a",{parentName:"p",href:"https://rg3.github.io/youtube-dl/download.html"},"https://rg3.github.io/youtube-dl/download.html"),". Let's add it to an image - but this time, we will change our process. Instead of our current process where we add things to the Dockerfile hope it works, let's try another approach. This time we will open up an interactive session and test stuff before \"storing\" it in our Dockerfile. By following the youtube-dl install instructions we will see that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ docker run -it ubuntu:18.04\n\n\n\n  root@8c587232a608:/# curl -L https://github.com/ytdl-org/youtube-dl/releases/download/2021.12.17/youtube-dl -o /usr/local/bin/youtube-dl\n  bash: curl: command not found\n")),(0,o.kt)("p",null,"..and, as we already know, curl is not installed - let's add ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"apt-get")," again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ apt-get update && apt-get install -y curl\n$ curl -L https://github.com/ytdl-org/youtube-dl/releases/download/2021.12.17/youtube-dl -o /usr/local/bin/youtube-dl\n")),(0,o.kt)("p",null,"At some point, you may have noticed that ",(0,o.kt)("em",{parentName:"p"},"sudo")," is not installed either, but since we are ",(0,o.kt)("em",{parentName:"p"},"root")," we don't need it."),(0,o.kt)("p",null,"Next, we will add permissions and run it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ chmod a+rx /usr/local/bin/youtube-dl\n$ youtube-dl\n  /usr/bin/env: 'python': No such file or directory\n")),(0,o.kt)("p",null,"Okay - On the top of the ",(0,o.kt)("inlineCode",{parentName:"p"},"youtube-dl")," download page we notice this message:"),(0,o.kt)("p",null,"Remember youtube-dl requires Python version 2.6, 2.7, or 3.2+ to work except for Windows exe."),(0,o.kt)("p",null,"So we will add python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ apt-get install -y python\n")),(0,o.kt)("p",null,"And let's run it again"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ youtube-dl\n\n  WARNING: Assuming --restrict-filenames since file system encoding cannot encode all characters. Set the LC_ALL environment variable to fix this.\n  Usage: youtube-dl [OPTIONS] URL [URL...]\n\n  youtube-dl: error: You must provide at least one URL.\n  Type youtube-dl --help to see a list of all options.\n")),(0,o.kt)("p",null,"It works (we just need to give an URL), but we notice that it outputs a warning about ",(0,o.kt)("inlineCode",{parentName:"p"},"LC_ALL"),". In a regular Ubuntu desktop/server install the localization settings are (usually) set, but in this image they are not set, as we can see by running ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," in our container. To fix this without installing additional locales, see this: ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/41648500"},"https://stackoverflow.com/a/41648500")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ LC_ALL=C.UTF-8 youtube-dl\n")),(0,o.kt)("p",null,"And it works! Let's persist it for our session and try downloading a video:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ export LC_ALL=C.UTF-8\n$ youtube-dl https://imgur.com/JY5tHqr\n")),(0,o.kt)("p",null,"So now when we know exactly what we need. Starting FROM ubuntu:18.04, add these to our ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". We should always try to keep the most prone to change rows at the bottom, by adding the instructions to the bottom we can preserve our cached layers - this is handy practise to speed up creating the initial version of a Dockerfile when it has time-consuming operations like downloads. Also added WORKDIR, this will ensure the videos will be downloaded there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM ubuntu:18.04\n\nWORKDIR /mydir\n\nRUN apt-get update && apt-get install -y curl python\nRUN curl -L https://github.com/ytdl-org/youtube-dl/releases/download/2021.12.17/youtube-dl -o /usr/local/bin/youtube-dl\nRUN chmod a+x /usr/local/bin/youtube-dl\n\nENV LC_ALL=C.UTF-8\n\nCMD ["/usr/local/bin/youtube-dl"]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN export LC_ALL=C.UTF-8")," we store the environment directly in the image with ENV")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We also override ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")," as our image command (set on the base image) with ",(0,o.kt)("em",{parentName:"p"},"youtube-dl")," itself. This will not work, but let's see why."))),(0,o.kt)("p",null,"When we build this as youtube-dl and run it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ docker build -t youtube-dl .\n  ...\n\n$ docker run youtube-dl\n\n  Usage: youtube-dl [OPTIONS] URL [URL...]\n\n  youtube-dl: error: You must provide at least one URL.\n\n  Type youtube-dl --help to see a list of all options.\n")),(0,o.kt)("p",null,"So far so good, but now the natural way to use this image would be to give the URL as an argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ docker run youtube-dl https://imgur.com/JY5tHqr\n\n  /usr/local/bin/docker: Error response from daemon: OCI runtime create failed: container_linux.go:296: starting container process caused "exec: \\"https://imgur.com/JY5tHqr\\": stat https://imgur.com/JY5tHqr: no such file or directory": unknown.\n\n  ERRO[0001] error waiting for container: context canceled\n')),(0,o.kt)("p",null,"As we now know, the argument we gave it is replacing the command or ",(0,o.kt)("inlineCode",{parentName:"p"},"CMD"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ docker run -it youtube-dl ps\n  PID TTY          TIME CMD\n    1 pts/0    00:00:00 ps\n$ docker run -it youtube-dl ls -l\ntotal 0\n$ docker run -it youtube-dl pwd\n/mydir\n")),(0,o.kt)("p",null,"We need a way to have something ",(0,o.kt)("em",{parentName:"p"},"before")," the command. Luckily we have a way to do this: we can use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#entrypoint"},"ENTRYPOINT")," to define the main executable and then Docker will combine our run arguments for it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM ubuntu:18.04\n\nWORKDIR /mydir\n\nRUN apt-get update && apt-get install -y curl python\nRUN curl -L https://github.com/ytdl-org/youtube-dl/releases/download/2021.12.17/youtube-dl -o /usr/local/bin/youtube-dl\nRUN chmod a+x /usr/local/bin/youtube-dl\n\nENV LC_ALL=C.UTF-8\n\n# Replacing CMD with ENTRYPOINT\nENTRYPOINT ["/usr/local/bin/youtube-dl"]\n')),(0,o.kt)("p",null,"And now it works like it should:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ docker build -t youtube-dl .\n$ docker run youtube-dl https://imgur.com/JY5tHqr\n\n  [Imgur] JY5tHqr: Downloading webpage\n  [download] Destination: Imgur-JY5tHqr.mp4\n  [download] 100% of 190.20KiB in 00:0044MiB/s ETA 00:000\n")),(0,o.kt)("p",null,"With ",(0,o.kt)("em",{parentName:"p"},"ENTRYPOINT")," ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," now executed the combined ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/youtube-dl https://imgur.com/JY5tHqr")," inside the container with that command!"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," vs ",(0,o.kt)("inlineCode",{parentName:"p"},"CMD")," can be confusing - in a properly set up image such as our youtube-dl the command represents an argument list for the entrypoint. By default entrypoint is set as ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/sh")," and this is passed if no entrypoint is set. This is why giving path to a script file as CMD works: you're giving the file as a parameter to ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/sh"),"."),(0,o.kt)("p",null,"If an image defines both, then the CMD is used to give ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#cmd"},"default arguments")," to the entrypoint. Let us now add a CMD to the Dockerfile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM ubuntu:18.04\n\nWORKDIR /mydir\n\nRUN apt-get update && apt-get install -y curl python\nRUN curl -L https://github.com/ytdl-org/youtube-dl/releases/download/2021.12.17/youtube-dl -o /usr/local/bin/youtube-dl\nRUN chmod a+x /usr/local/bin/youtube-dl\n\nENV LC_ALL=C.UTF-8\n\nENTRYPOINT ["/usr/local/bin/youtube-dl"]\n\n# define a default argument\nCMD ["https://imgur.com/gallery/xwJgflf"]\n')),(0,o.kt)("p",null,"Now (after build again) the image can be run without arguments to download the video defined in CMD:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ docker run youtube-dl\n\n  [Imgur] JY5tHqr: Downloading webpage\n  [download] Destination: Imgur-JY5tHqr.mp4\n  [download] 100% of 190.20KiB in 00:0044MiB/s ETA 00:000\n")),(0,o.kt)("p",null,"The argument defined by CMD can be ",(0,o.kt)("em",{parentName:"p"},"overridden")," by giving one in the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ docker run youtube-dl https://imgur.com/gallery/iT3U4K4\n[imgur:gallery] iT3U4K4: Downloading JSON metadata\n[download] Downloading playlist: A candlelight dinner needs a doggie serenade\n[imgur:gallery] playlist A candlelight dinner needs a doggie serenade: Collected 1 video ids (downloading 1 of them)\n[download] Downloading video 1 of 1\n[Imgur] ZkjbtYw: Downloading webpage\n[download] Destination: Imgur-ZkjbtYw.mp4\n[download] 100% of 5.02MiB in 00:0183MiB/s ETA 00:00known ETA\n[download] Finished downloading playlist: A candlelight dinner needs a doggie serenade\n")),(0,o.kt)("p",null,"Note that despite the name, ",(0,o.kt)("em",{parentName:"p"},"youtube-dl")," works currently only with ",(0,o.kt)("a",{parentName:"p",href:"https://imgur.com/"},"imgur.com"),"."),(0,o.kt)("p",null,"In addition to all seen, there are two ways to set the ENTRYPOINT and CMD: ",(0,o.kt)("strong",{parentName:"p"},"exec")," form and ",(0,o.kt)("strong",{parentName:"p"},"shell")," form. We've been using the exec form where the command itself is executed. In shell form the command that is executed is wrapped with ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/sh -c")," - it's useful when you need to evaluate environment variables in the command like ",(0,o.kt)("inlineCode",{parentName:"p"},"$MYSQL_PASSWORD")," or similar."),(0,o.kt)("p",null,"In the shell form the command is provided as a string without brackets. In the exec form the command and it's arguments are provided as a list (with brackets), see the table below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Dockerfile"),(0,o.kt)("th",{parentName:"tr",align:null},"Resulting command"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ENTRYPOINT /bin/ping -c 3 ",(0,o.kt)("br",null)," CMD localhost"),(0,o.kt)("td",{parentName:"tr",align:null},"/bin/sh -c '/bin/ping -c 3' /bin/sh -c localhost")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ENTRYPOINT ",'["/bin/ping","-c","3"]'," ",(0,o.kt)("br",null)," CMD localhost"),(0,o.kt)("td",{parentName:"tr",align:null},"/bin/ping -c 3 /bin/sh -c localhost")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ENTRYPOINT /bin/ping -c 3 ",(0,o.kt)("br",null)," CMD ",'["localhost"]'),(0,o.kt)("td",{parentName:"tr",align:null},"/bin/sh -c '/bin/ping -c 3' localhost")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ENTRYPOINT ",'["/bin/ping","-c","3"]'," ",(0,o.kt)("br",null)," CMD ",'["localhost"]'),(0,o.kt)("td",{parentName:"tr",align:null},"/bin/ping -c 3 localhost")))),(0,o.kt)("p",null,"As the command at the end of Docker run will be the CMD we want to use ENTRYPOINT to specify what to run, and CMD to specify which command (in our case url) to run."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Most of the time")," we can ignore ENTRYPOINT when building our images and only use CMD. For example, Ubuntu image defaults the ENTRYPOINT to bash so we do not have to worry about it. And it gives us the convenience of allowing us to overwrite the CMD easily, for example, with bash to go inside the container."),(0,o.kt)("p",null,"We can test how some other projects do this. Let's try python:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ docker pull python:3.8\n...\n$ docker run -it python:3.8\n  Python 3.8.2 (default, Mar 31 2020, 15:23:55)\n  [GCC 8.3.0] on linux\n  Type "help", "copyright", "credits" or "license" for more information.\n  >>> print("Hello, World!")\n  Hello, World!\n  >>> exit()\n\n$ docker run -it python:3.8 --version\n  docker: Error response from daemon: OCI runtime create failed: container_linux.go:370: starting container process caused: exec: "--version": executable file not found in $PATH: unknown.\n\n$ docker run -it python:3.8 bash\n  root@1b7b99ae2f40:/#\n\n')),(0,o.kt)("p",null,"From this experimentation we learned that they have ENTRYPOINT as something other than python, but the CMD is python and we can overwrite it, here with bash. If they had ENTRYPOINT as python we'd be able to run ",(0,o.kt)("inlineCode",{parentName:"p"},"--version"),". We can create our own image for personal use as we did in a previous exercise with a new Dockerfile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM python:3.8\nENTRYPOINT ["python3"]\nCMD ["--help"]\n')),(0,o.kt)("p",null,"The result is an image that has python as ENTRYPOINT and you can add the commands at the end, for example --version to see the version. Without overwriting the command, it will output the help."),(0,o.kt)("p",null,"Now we have two problems with the youtube-dl project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Major: The downloaded files stay in the container")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Minor: Our container build process creates many layers resulting in increased image size"))),(0,o.kt)("p",null,"We will fix the major issue first. The minor issue will get our attention in part 3."),(0,o.kt)("p",null,"By inspecting ",(0,o.kt)("inlineCode",{parentName:"p"},"docker container ls -a")," we can see all our previous runs. When we filter this list with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ docker container ls -a --last 3\n\n  CONTAINER ID        IMAGE               COMMAND                   CREATED                  STATUS                          PORTS               NAMES\n  be9fdbcafb23        youtube-dl          "/usr/local/bin/yout\u2026"    Less than a second ago   Exited (0) About a minute ago                       determined_elion\n  b61e4029f997        f2210c2591a1        "/bin/sh -c \\"/usr/lo\u2026"   Less than a second ago   Exited (2) About a minute ago                       vigorous_bardeen\n  326bb4f5af1e        f2210c2591a1        "/bin/sh -c \\"/usr/lo\u2026"   About a minute ago       Exited (2) 3 minutes ago                            hardcore_carson\n')),(0,o.kt)("p",null,"We see that the last container was ",(0,o.kt)("inlineCode",{parentName:"p"},"be9fdbcafb23")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"determined_elion")," for us humans."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ docker diff determined_elion\n\n  C /mydir\n  A /mydir/Imgur-JY5tHqr.mp4\n")),(0,o.kt)("p",null,"Let's try ",(0,o.kt)("inlineCode",{parentName:"p"},"docker cp")," command to copy the file. We can use quotes if the filename has spaces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ docker cp "determined_elion://mydir/Imgur-JY5tHqr.mp4" .\n')),(0,o.kt)("p",null,"And now we have our file locally. Sadly, this is not sufficient to fix our issue. In the next section, we will improve this."),(0,o.kt)("h2",{id:"improved-curler"},"Improved curler"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," we can make the curler of the ",(0,o.kt)("a",{parentName:"p",href:"/part-1/section-3#exercises-17---18"},"Exercise 1.7.")," more flexible."),(0,o.kt)("p",null,"Change the script so that it takes the first argument as the input:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\necho "Searching..";\nsleep 1;\ncurl http://$1;\n')),(0,o.kt)("p",null,"And change the CMD to ENTRYPOINT with the format ",(0,o.kt)("inlineCode",{parentName:"p"},'["./script.sh"]'),". Now we can run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker build . -t curler-v2\n$ docker run curler-v2 helsinki.fi\n\n  Searching..\n    % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                   Dload  Upload   Total   Spent    Left  Speed\n  100   232  100   232    0     0  13647      0 --:--:-- --:--:-- --:--:-- 13647\n  <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">\n  <html><head>\n  <title>301 Moved Permanently</title>\n  </head><body>\n  <h1>Moved Permanently</h1>\n  <p>The document has moved <a href="https://www.helsinki.fi/">here</a>.</p>\n  </body></html>\n')))}c.isMDXComponent=!0}}]);