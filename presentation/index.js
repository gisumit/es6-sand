// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text,
  Code,
  CodePane,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "black",
  secondary: "white",
  red: "#c00",
  tertiary: "#03A9FC",
  quarternary: "yellow"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} progress="pacman" transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary" controlColor="white">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ES6 Hands On
          </Heading>

        </Slide>
        <Slide transition={["fade"]} bgColor="primary" controlColor="white">
          <Heading size={1} textColor="red" caps>What is es6?</Heading>
          <Text size={6} textColor="primary">A set new features of JS</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" controlColor="white">
          <Heading size={1} textColor="red" caps>What is es6?</Heading>
          <Text size={6} textColor="secondary">A set new features of JS</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" controlColor="white">
          <Heading size={5} textColor="secondary">aka</Heading>
          <Appear>
            <Heading size={1} textColor="secondary">ES2015</Heading>
          </Appear>
          <Appear>
            <Heading size={2} textColor="secondary">ECMA6</Heading>
          </Appear>
          <Appear>
            <Heading size={3} textColor="secondary">ESMA2015</Heading>
          </Appear>
          <Appear>
            <Link textColor="tertiary" href="https://www.ecma-international.org/ecma-262/6.0/">es6 specification </Link>
          </Appear>
        </Slide>
        <Slide transition={["fade"]}
          bgImage="https://source.unsplash.com/y8CtjK0ej6A/1200x900"
          bgDarken={0.5}
          controlColor="white"
        >
          <Heading size={3} textColor="secondary">So let's get started</Heading>
        </Slide>
        <Slide bgColor="primary" transition={["zoom"]} textColor="tertiary" controlColor="white">
          <Code textColor="white" textSize={60}>var vs let vs const ?</Code>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/snippet1.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary" controlColor="white">
          <BlockQuote>
            <Quote textColor="secondary">Alway use <Code textColor="#9a86fd" bgColor="#333">const</Code> </Quote>
          </BlockQuote>
        </Slide>
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="secondary"
          bgImage="https://source.unsplash.com/TMxUnMAAwFA/1200x900"
          bgDarken="0.5"
        >
          <Heading size={3} textColor="secondary">
            Arrow functions
          </Heading>
        </Slide>
        <Slide bgColor="primary" transition={["zoom"]} textColor="tertiary" controlColor="white">
          <Heading size={5} textColor="secondary">
            Basic function expression
          </Heading>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/arrow/snipp1.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
        </Slide>
        <Slide bgColor="primary" transition={["fade"]} textColor="tertiary" controlColor="white">
          <Heading size={5} textColor="secondary">
            Arrow function
          </Heading>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/arrow/snipp2.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/arrow/snipp3.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
        </Slide>
        <Slide bgColor="primary" transition={["fade"]} textColor="tertiary" controlColor="white">
          <Heading size={5} textColor="secondary">
            Explicit Return
          </Heading>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/arrow/snipp3.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
          <Appear>
            <List>
              <ListItem>Object</ListItem>
              <Appear>
                <ListItem>Array</ListItem>
              </Appear>
              <Appear>
                <ListItem>Functions</ListItem>
              </Appear>
              <Appear>
                <ListItem>any</ListItem>
              </Appear>
            </List>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" textColor="secondary" controlColor="white">
          <Heading size={5} textColor="secondary">
            Default Param
          </Heading>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/params/snipp1.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/params/snipp2.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>

        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" controlColor="white">
          <Heading size={5} textColor="secondary">
            Handling named parameters
          </Heading>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/params/snipp3.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/params/snipp4.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary" controlColor="white">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/params/snipp5.example")}
            margin="20px auto"
            textSize="25"
            overflow="overflow"
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
          bgImage="https://source.unsplash.com/chp1ITgplkA/1200x900"
          bgDarken={0.5}
        >
          <Heading size={1} textColor="secondary">
            New in Loops
          </Heading>
          <Appear>
            <Heading size={6} textColor="secondary">
              forEach
            </Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="secondary">
              for of
            </Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="secondary">
              for in
            </Heading>
          </Appear>
        </Slide>


        <Slide transition={["zoom"]} bgColor="primary" textColor="secondary" controlColor="white">
          <Heading size={5} textColor="secondary">
            forEach
          </Heading>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/loop/snipp1.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/loop/snipp2.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" controlColor="white">
          <Heading size={5} textColor="secondary">
            for of
          </Heading>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/loop/snipp3.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/loop/snipp4.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
          bgImage="https://source.unsplash.com/pdlZrtuy-Dw/1200x900"
          bgDarken="0.5"
        >
          <Heading size={4} textColor="secondary">
            Functions Expression in Object Definition
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
        >
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/object/snipp1.example")}
            margin="20px auto"
            textSize="25"
            overflow="overflow"
          />

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
          bgImage="https://source.unsplash.com/K0mWS52UVqo/1200x900"
          bgDarken="0.5"
        >
          <Heading size={4} textColor="secondary">
            Template Literals
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
        >
          <Heading size={4} textColor="secondary">
            for string interpolation and multi-line strings.
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/backtick/snipp1.example")}
            margin="20px auto"
            textSize="25"
            overflow="overflow"
          />

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
          bgImage="https://source.unsplash.com/qeErbl0OvbE/1200x900"
          bgDarken="0.5"
        >
          <Heading size={4} textColor="secondary">
            New Object Methods
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
        >
          <Appear>
            <Heading size={5} textColor="secondary">
              Object.assign()
            </Heading>
          </Appear>
          <Appear>
            <Heading size={5} textColor="secondary">
              Object.freeze() & Object.seal()
            </Heading>
          </Appear>
          <Appear>
            <Heading size={5} textColor="secondary">
              Object.keys()
            </Heading>
          </Appear>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
        >
          <Heading size={5} textColor="secondary">
            Object.assign()
          </Heading>
          <Text textSize="25" margin="20px 0px 60px 0px" textColor="white">
            copies the values from one or more source objects to a target object.
          </Text>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/object/snipp2.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
        >
          <Heading size={5} textColor="secondary">
            Object.freeze() & Object.seal()
          </Heading>
          <Text textSize="25" margin="20px 0px 60px 0px" textColor="white">
            object in a frozen state.
          </Text>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/object/snipp2.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
        >
          <Heading size={5} textColor="secondary">
            Object.freeze() & Object.seal()
          </Heading>
          <Text textSize="25" margin="20px 0px 60px 0px" textColor="white">
            Seals an object.
            Values of present properties can still be changed as long as they are writable.
          </Text>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/object/snipp4.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
        >
          <Heading size={5} textColor="secondary">
            Object.keys()
          </Heading>
          <Text textSize="25" margin="20px 0px 60px 0px" textColor="white">
            Return an array of strings that represent all the enumerable properties of the given object.
          </Text>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/object/snipp5.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
          bgImage="https://source.unsplash.com/EMZxDosijJ4"
          bgDarken="0.7"
        >
          <Heading size={4} textColor="secondary">
            Promise
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
        >
          <Heading size={5} textColor="secondary">
            Creating A Promise
          </Heading>
          <Text textSize="25" margin="20px 0px 60px 0px" textColor="white">
            A promise is said to be settled if it is either fulfilled or rejected, but not pending.
          </Text>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/promise/snipp1.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
        >
          <Heading size={5} textColor="secondary">
            Promise Methods
          </Heading>
          <List textSize="25" margin="20px 0px 60px 0px" textColor="white">
            <Appear>
              <ListItem>
                Promise.all()
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Promise.race()
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Promise.resolve()
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Promise.reject()
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                myPromise.then()
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                myPromise.cath()
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
          bgImage="https://source.unsplash.com/7Z03R1wOdmI"
          bgDarken="0.7"
        >
          <Heading size={4} textColor="secondary">
            ES6 Modules
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
        >
          <Heading size={5} textColor="secondary">
            Export Default
          </Heading>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/module/snipp1.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
        >
          <Heading size={5} textColor="secondary">
            Imports
          </Heading>
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/module/snipp2.example")}
              margin="20px auto"
              textSize="25"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide
          transition={["slide"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
          bgImage="https://source.unsplash.com/z55CR_d0ayg"
          bgDarken="0.5"
        >
          <Heading size={5} textColor="secondary">
            and more comming soon
          </Heading>

        </Slide>

        <Slide
          transition={["slide"]}
          bgColor="primary"
          textColor="secondary"
          controlColor="white"
        >
          <Heading size={5} textColor="secondary">
            fin.
          </Heading>
          <Appear>
            <Link textColor="tertiary" href="kangax.github.io/compat-table/es6">es6 support </Link>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}

