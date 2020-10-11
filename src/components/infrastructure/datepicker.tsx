import * as React from 'react';
import Materialize from 'materialize-css';
import moment from 'moment'
import 'moment/locale/ru'

interface IState {
    value: any;
}

interface IProps {
    label?: any;
    format: any;
    onChange: any;
    formatMoment: any;
}
// Custom DatePicker for Materialize-CSS and React
export default class DatePicker extends React.Component<IProps, IState> {
    static defaultProps = {
        value: new Date(),
        format: 'd, mmm yyyy',
        formatMoment: 'D, MMM YYYY'
    }

    constructor(props: any) {
        super(props);
        this.componentWillReceiveProps(props);
    }

    componentWillReceiveProps(props: any) {
        //setState does not make any sense
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state = {
            value: props.value
        };
    }

    render() {
        return <div className="input-field col s6">
            <i className="material-icons prefix">date_range</i>
            <input id="date" type="text" className="datepicker queso"
                value={moment(this.state.value).locale('ru').format(this.props.formatMoment)}
            />
            <label className="active" htmlFor="date">{this.props.label}</label>
        </div>;
    }


    componentDidMount() {
        var context = this;

        var elems = document.querySelectorAll('.queso');
        Materialize.Datepicker.init(elems, {
            minDate: new Date(1900, 10, 10),
            yearRange: 100,
            defaultDate: new Date(),
            format: this.props.format,
            container: 'body',
            onSelect: function (date: any) {
                context.setState({ value: context.state.value });
                context.props.onChange(date);
            },
            autoClose: true
        } as Partial<any>);

    }
}