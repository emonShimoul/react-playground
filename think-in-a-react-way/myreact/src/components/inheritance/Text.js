import Emoji from "./Emoji";

export default class Text extends Emoji {
    constructor(props){
        super(props);
    }

    render() {
        const decoratedText = this.addEmoji('I am JS languale', ' emoji ');
        return super.render(decoratedText);
    }
}
