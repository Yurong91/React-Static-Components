class Reviews extends React.Component {
    render() {
        return (
            <div class="Reviews">
            <h2>Reviews</h2>
            <h3>1884</h3>
            </div>
        )
    }
}

class AverageRating extends React.Component {
    render() {
        return (
            <div class="AverageRating">
            <h2>Average Rating</h2>
            <h3>4.0</h3>
            </div>
        )
    }
}

class SentimentAnalysis extends React.Component {
    render() {
        return (
            <div class="SentimentAnalysis">
            <h2>Sentiment Analysis</h2>
            <h3>9600</h3>
            <h3>1200</h3>
            <h3>3700</h3>
            </div>
        )
    }
}

class WebsiteVisitor extends React.Component {
    render() {
        return (
            <div class="WebsiteVisitor">
            <h2>Website Visitor</h2>  
            <h3>7000</h3>
            <p class="Box"></p>
            </div>
        )
    }
}

class Dashboard extends React.Component {
    render() {
        return (
            <div class="Dashboard">
            <h2>Dashboard</h2>
            <h3>Widget</h3>
            <h3>Reviews</h3>
            <h3>Customers</h3>
            <h3>Online Analysis</h3>
            <h3>Settings</h3>
            </div>
        )
    }
}

class Board extends React.Component {
    render() {
        return (
            <div class="Board">
            <Reviews />
            <AverageRating />
            <SentimentAnalysis />
            <WebsiteVisitor />
            <Dashboard />
            </div>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
            <Board />

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)