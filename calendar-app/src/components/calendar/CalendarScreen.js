import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Navbar } from '../ui/Navbar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { AddNewFab } from '../ui/AddNewFab';
import { messages } from '../../helpers/calendar-messages-es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { uiOpenModal } from '../../redux/actions/ui';
import { eventSetActive } from '../../redux/actions/events';

moment.locale('es');

const localizer = momentLocalizer(moment); 

const events = [{
    title: 'Cumpleaños del Jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
        _id: '123',
        name: 'Emmanuel',
    }
}];

export const CalendarScreen = () => {

    const dispatch = useDispatch();

    const initialState = localStorage.getItem('lastView') || 'month';
    const [lastView, setLastView] = useState(initialState);

    const onDoubleClick = (e) => {
        console.log(e);
        console.log('Abrir Modal');
        dispatch(uiOpenModal());
    };

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e));
        dispatch(uiOpenModal());
    };

    const onViewChange = (e) => {
        console.log(e);
        setLastView(e);
        localStorage.setItem('lastView', e);
    };

    const eventStyleGetter = ( event, start, end, isSelected ) => {

        // console.log(event, start, end, isSelected);

        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white',
        }

        return {
            style
        }
        
    };

    return (
        <div className="calendar-screen">

            <Navbar />

            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                view= { lastView }
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewFab />

            <CalendarModal />

        </div>
    );
};
