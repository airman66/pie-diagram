import React from 'react';
import PieChart from "./components/PieChart";

class App extends React.Component {
    state = {
        data: [
            {
                "name": "Единая региональная платформа",
                "value": 10
            },
            {
                "name": "Решение есть в столице",
                "value": 5
            },
            {
                "name": "Решение есть в организациях",
                "value": 24
            },
            {
                "name": "Потребность есть, решение не внедрено",
                "value": 38
            },
            {
                "name": "Решение не требуется",
                "value": 3
            },
            {
                "name": "Нет информации о внедрении системы",
                "value": 5
            }
        ]
    };

    render() {
        const data = this.state.data.map(el => el.value);
        const labels = this.state.data.map(el => el.name);
        return (
            <div className="App">
                <div className="container">
                    <PieChart data={data} labels={labels} />
                </div>
            </div>
        );
    }
}

export default App;
