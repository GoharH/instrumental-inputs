import React from "react";
import './style.scss';
import brush from '../image/brush.png'

class InstrumentInput extends React.Component {
    state = {
        title: '',
        description: '',
        bgColor: '',
        bgRadius: 0,
        fsTitle: 30,
        titleColor: '',
        fsDescript: 12,
        descriptColor: ''
    }

    handleChangeTitle = (e) => {
        this.setState({ title: e.target.value })
    }
    handleChangeTitleColor = (e) => {
        this.setState({ titleColor: e.target.value })
    }
    handleChangeTitleSize = (e) => {
        this.setState({ fsTitle: e.target.value })
    }
    handleChangeDescription = (e) => {
        this.setState({ description: e.target.value })
    }
    handleChangeDescriptionColor = (e) => {
        this.setState({ descriptColor: e.target.value })
    }
    handleChangeDescriptionSize = (e) => {
        this.setState({ fsDescript: e.target.value })
    }
    handleChangeBgColor = (e) => {
        this.setState({ bgColor: e.target.value })
    }
    handleChangeBgRadius = (e) => {
        this.setState({ bgRadius: e.target.value })
    }
    render() {
        const styleBgColor = { backgroundColor: this.state.bgColor };
        const styleBgRadius = { borderRadius: this.state.bgRadius + 'px' };
        const styleTitleColor = { color: this.state.titleColor };
        const styleTitleSize = { fontSize: this.state.fsTitle + 'px' };
        const styleDescriptColor = { color: this.state.descriptColor };
        const styleDescriptSize = { fontSize: this.state.fsDescript + 'px' };

        return <section>
            <div className="instruments">
                <div className="changer">
                    <p>Title</p>
                    <label>
                        <input type="text" name="title" value={this.state.title}
                            onChange={this.handleChangeTitle} />
                    </label>
                    <label>
                        <input type="color" className="i-hidden" value={this.state.titleColor}
                            onChange={this.handleChangeTitleColor} />
                        <span style={{ backgroundImage: `url(${brush})` }} ></span>
                    </label>
                    <label>
                        <input type="range" value={this.state.fsTitle} min={30} max={80}
                            onChange={this.handleChangeTitleSize} />
                    </label>
                </div>
                <div className="changer">
                    <p>Description</p>
                    <label>
                        <input type="text" name="title" value={this.state.direction}
                            onChange={this.handleChangeDescription} />
                    </label>
                    <label>
                        <input type="color" className="i-hidden" value={this.state.descriptColor}
                            onChange={this.handleChangeDescriptionColor} />
                        <span style={{ backgroundImage: `url(${brush})` }} ></span>
                    </label>
                    <label>
                        <input type="range" value={this.state.fsDescript} min={12} max={25}
                            onChange={this.handleChangeDescriptionSize} />
                    </label>
                </div>
                <div className="changer">
                    <p>Background</p>
                    <label className="color-lab">
                        <input type="color" className="i-hidden" value={this.state.bgColor}
                            onChange={this.handleChangeBgColor} />
                        <span className="color-span" style={{ backgroundImage: `url(${brush})` }}></span>
                    </label>
                    <label>
                        <input type="range" value={this.state.bgRadius} min={0} max={50}
                            onChange={this.handleChangeBgRadius} />
                    </label>
                </div>
            </div>
            <div className="work-space" >
                <div className="work-window" style={{ ...styleBgColor, ...styleBgRadius }}>
                    <p className="p-title" style={{ ...styleTitleColor, ...styleTitleSize }}>{this.state.title}</p>
                    <p style={{ ...styleDescriptColor, ...styleDescriptSize }}>{this.state.description}</p>
                </div>
            </div>
        </section>
    }
}
export default InstrumentInput

