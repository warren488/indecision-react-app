
class AppData {
    constructor({ title = 'Default title', subtitle = 'Default subtitle', options = [] } = {}) {
        this.title = title
        this.subtitle = subtitle
        this.options = options
    }
}
let currApp;

let appData1 = new AppData({
    title: 'Indecision App 2',
    subtitle: 'A subtitle'
})

let appData = new AppData({
    title: 'Indecision App',
    subtitle: 'A subtitle',
    options: []
})

currApp = appData1

let user = {
    fname: 'Warren',
    lname: 'Scantlebury',
    age: 22,
    location: 'Bim'
}

user.fullName = user.fname + ' ' + user.lname

let getLocation = (user) => {
    if (user.location !== undefined) {
        return <p>Location: {user.location}</p>
    }
    return 'uknown'
}

function switchApp() {
    (currApp === appData ? currApp = appData1 : currApp = appData)
    render()
}



let templateTwo = (
    <div>
        <h1>{user.fullName ? user.fullName : 'Anonymous'}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user)}
    </div>
)


function render() {
    let template = (
        <div>
            <h1>{currApp.title}</h1>
            {currApp.subtitle && <p>{currApp.subtitle}</p>}

            <button onClick={switchApp}>switch Apps</button>
        </div>
    )
    let appRoot = document.getElementById("app")

    ReactDOM.render(template, appRoot)
}
render()

let toggleVisibility = (visible) => () => {
    renderVisibility(!visible)
}

function renderVisibility(visible) {
    let appRoot = document.getElementById("app")
    let text = 'My simple visibilty text'
    const template = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={toggleVisibility(visible)}>{visible ? 'hide' : 'show'} details</button>
            {visible ? <p>{text}</p> : visible}
        </div>
    )

    ReactDOM.render(template, appRoot)
}

renderVisibility(false)