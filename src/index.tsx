import React from "react";
import ReactDOM from "react-dom";
import Switch from "./Switch";

interface State {
    isSwitchChecked: boolean;
    isSwitchDisabled: boolean;
}

class App extends React.PureComponent<{}, State> {
    public state: State = {
        isSwitchChecked: false,
        isSwitchDisabled: false,
    };

    onToggleDisable = () => this.setState({ isSwitchDisabled: !this.state.isSwitchDisabled });

    onChange = (checked: boolean) => this.setState({ isSwitchChecked: checked });

    render() {
        const {
            isSwitchChecked,
            isSwitchDisabled,
        } = this.state;
        return (
            <div>
                <p>Controlled</p>
                <Switch
                    checked={isSwitchChecked}
                    disabled={isSwitchDisabled}
                    onChange={this.onChange}
                />
                <button type="button" onClick={this.onToggleDisable}>
                    Toggle Disable
                </button>
                <hr />
                <p>Un-controlled</p>
                <Switch />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app")!);
