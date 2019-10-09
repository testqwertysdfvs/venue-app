### Task 1

#### Question:
`What are your thoughts about the advantages and disadvantages of using CSS in JS
 approach?`
 
###### Advantages:
 - You can  include styles in component, and make it not global and independent from other components.
 - Able to use js logic and other features inside styles, for example pass props in classes, compose classes in Styled components
 - No need to setup build especially for .css
 - For someone syntax can be more comfortable
 
 Rare case from my own practice:
 
 There was a big project based on very old version Ruby on Rails with a lot of legacy. And there ware React components on some pages. This React components were included by old deprecated RoR plugin. And by some issues we wasn't able to import styles inside components because this plugin didn't understand css/scss etc. files. We could add styles only globally. So using Styled components solved this problem.
  
###### Disadvantages:
- Problems with syntax highlighting, linters etc. in different IDE
- You can't compose CSS-in-JS with SCSS, LESS etc. mixins and styles
- Security issues. For example you can inject scripts in styles
- Can be styles priorities conflicts between css-in-js and css/scss etc. files

## Task 2
Task with all requirements done and works. 

Run development version:

`yarn start`

Run production version:

`npm install -g serve`

`serve -s build`

I especially used stack React without Typescript and Styled components, because this stack mentioned in vacancy. Also I used components with hooks and one custom hook to get data from api. I put comments in some parts of code. 

