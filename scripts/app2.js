class FullApp extends React.Component {
    constructor(props) {
        super(props)
        this.appData = {
            title: 'Indecision App 2',
            subtitle: 'A subtitle',
            options: []
        }
        this.state = {
            appData: this.appData
        }
    }
    render() {
        return (
            <div>
                <Header currApp={this.state.appData} />
                <Options currApp={this.state.appData} />
                <AddOption currApp={this.state.appData} />
                <Action currApp={this.state.appData} />

            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Indecision</h1>
                <h2>Do something already</h2>
            </header>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: this.props.currApp.options
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.options && this.state.options.length > 0 ? 'here are your options' : 'No options'}</p>
                <p>optionCount: {this.state.options.length}</p>
                {this.renderList(this.state.options)}
            </div>
        )
    }
    renderList(list) {
        return list.map((item, index) => <p key={index}>{index + 1}: {item}</p>)
    }

}

class Action extends React.Component {
    onMakeDecision() {
        const rand = Math.floor(Math.random() * this.props.currApp.options.length)
        console.log(rand)
    }
    render() {
        return (
            <div>
                <button disabled={this.props.currApp.options.length === 0} onClick={this.onMakeDecision}>What should I do</button>
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
            options: this.props.currApp.options
        }
    }

    //funny trick i have to do because this function will be run as an event handler 
    // so the context is messed up
    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state)

        let option = event.target.elements.option.value;

        if (option) {
            this.setState((prev) => ({
                options: prev.options.concat([option])
            }))
            event.target.elements.option.value = ''
            // __this.render()
        }
    }

    render() {
        return (
            <div>
                {this.state.options.map((val)=> <p>{val}</p>)}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"></input>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

const template = <FullApp />

ReactDOM.render(template, document.getElementById('app'))