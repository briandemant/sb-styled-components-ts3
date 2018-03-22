import * as React from "react"
import { render } from "react-dom"
import styled from "styled-components"
import Button from "./Button"

const Wrapper = styled.div`
	padding: 20px;
	background: #fed;
	width: 300px;

	${Button} {
		display: block;
	}

	${Button} ~ ${Button} {
		margin-top: 20px;
	}
`

const App = () => (
	<Wrapper>
		<Button>Click</Button>
		<Button look="secondary" size="medium">
			Click
		</Button>
		<Button look="dark" size="medium">
			Click
		</Button>
		<Button look="light" size="huge" radius={100}>
			Click me please!
		</Button>
	</Wrapper>
)

render(<App />, document.getElementById("root"))
