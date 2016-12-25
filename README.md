# react-native-spotify-ui
Pure javascript prototype of iOS Facebook UI for React Native framework. This demo only includes the landing page. 
I will add more views in the future.

##Inspiration
I was always amazed by the amazing Spotify UI, and I decided to challenge myself. THe pulling drawer from the bottom was the hardest challenge--
there are so many bugs to combinate pan-responder with other components. Buttons do not respond with PanResponder. If anyone knows a fix, please message me!
 
<b>[FIX]</b> Now buttons are clickable, thanks to Dan Horrigan's recommendation
- Regarding the buttons in the PanResponder not working: I believe this is because you have `onStartShouldSetPanResponderCapture` returning `true`. I believe this is causing it to capture all touches on the View. Instead you should just have `onStartShouldSetPanResponder` return `true`, which will respect PanResponder's touch bubbling algorithm. The PR is pretty good at handling these conflicts in a predictable way most of the time.
  
  Another option: Make the "Header" of that slide-up View the "handle", so that the user has to start the gesture on that View. This is the way the Spotify app works anyways. You can't swipe down on any part of the scene except the Header.

<b>[FIX]</b> Fixed screen flickering issue with gesture.y0.


The design aspect of this demo belong to <b>Spotify</b>. 


###Demo
![demo](https://raw.githubusercontent.com/ggomaeng/react-native-spotify-ui/master/demo.gif)

## Try it out

Try it with Exponent: https://getexponent.com/@sungwoopark95/react-native-spotify-ui

## Run it locally

To install, there are two steps:

1. Install Exponent XDE [following this
guide](https://docs.getexponent.com/versions/latest/introduction/installation.html).
Also install the Exponent app on your phone if you want to test it on
your device, otherwise you don't need to do anything for the simulator.
2. Clone this repo and run `npm install`
  ```bash
  git clone https://github.com/ggomaeng/react-native-spotify-ui.git spotify

  cd spotify
  npm install
  ```
3. Open the project with Exponent XDE and run it.

The MIT License (MIT)
=====================

Copyright © 2016 Sung Woo Park

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
