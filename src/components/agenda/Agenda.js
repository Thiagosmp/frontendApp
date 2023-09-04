import React, {useEffect, useState} from 'react';
import {
    BackHandler,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity, ScrollView, Modal
} from 'react-native';

export default function Agenda({navigation}) {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // Change this to the desired month
    const currentYear = new Date().getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = (date) => {
        setSelectedDate(date);
        setIsModalVisible(!isModalVisible);
    };

    const goToPreviousMonth = () => {
        const newMonth = currentMonth - 1;
        setCurrentMonth(newMonth < 0 ? 11 : newMonth);
    };

    const goToNextMonth = () => {
        const newMonth = currentMonth + 1;
        setCurrentMonth(newMonth > 11 ? 0 : newMonth);
    };


    const renderCalendar = () => {
        const calendar = [];
        let dayCounter = 1;

        for (let week = 0; week < 6; week++) {
            const days = [];

            let isEmptyWeek = true; // Flag to track if the week is empty

            for (let day = 0; day < 7; day++) {
                if ((week === 0 && day < firstDayOfMonth) || dayCounter > daysInMonth) {
                    days.push(<View key={day} style={styles.day}/>);
                } else {
                    days.push(
                        <TouchableOpacity
                            key={day}
                            style={styles.day}
                            onPress={() => toggleModal(`0${day}/0${currentMonth + 1}/${currentYear}`)}
                        >
                            <Text style={styles.dayNumber}>{dayCounter}</Text>
                        </TouchableOpacity>
                    );
                    dayCounter++;
                    isEmptyWeek = false; // Mark the week as not empty
                }
            }

            // Add the week to the calendar array only if it's not empty
            if (!isEmptyWeek) {
                calendar.push(
                    <View key={week} style={styles.calendarRow}>
                        {days}
                    </View>
                );
            }
        }

        return calendar;
    };

    function getMonthName(monthIndex) {
        const monthNames = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        return monthNames[monthIndex];
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.agenda}>
                    <Text style={styles.agendaTitle}>Agende seu serviço</Text>
                    <Text style={styles.agendaSubTitle}>Verifique o dia e as disponibilidades de horários, entre outros
                        detalhes.</Text>
                    <View style={styles.monthNavigation}>
                        <TouchableOpacity onPress={goToPreviousMonth}>
                            <Text style={styles.navigationText}>&lt;</Text>
                        </TouchableOpacity>
                        <Text style={styles.mesAno}>{getMonthName(currentMonth)} {currentYear}</Text>
                        <TouchableOpacity onPress={goToNextMonth}>
                            <Text style={styles.navigationText}>&gt;</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.calendar}>
                        <Text style={styles.dayOfWeek}>Dom</Text>
                        <Text style={styles.dayOfWeek}>Seg</Text>
                        <Text style={styles.dayOfWeek}>Ter</Text>
                        <Text style={styles.dayOfWeek}>Qua</Text>
                        <Text style={styles.dayOfWeek}>Qui</Text>
                        <Text style={styles.dayOfWeek}>Sex</Text>
                        <Text style={styles.dayOfWeek}>Sab</Text>
                    </View>
                    <View style={styles.calendarDay}>
                        {renderCalendar()}
                    </View>
                    <View style={styles.legend}>
                        <View style={[styles.legendColor, {backgroundColor: '#ff00009a'}]}/>
                        <Text style={styles.legendText}>Ocupado</Text>
                        <View style={[styles.legendColor, {backgroundColor: '#00ff009a'}]}/>
                        <Text style={styles.legendText}>Selecionado</Text>
                        <View style={[styles.legendColor, {backgroundColor: '#f1f1f1'}]}/>
                        <Text style={styles.legendText}>Livre</Text>
                    </View>
                </View>
            </ScrollView>
            <Modal visible={isModalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.agendaSubTitleHours}>Data disponível</Text>
                        <Text style={styles.dataDia}>{selectedDate}</Text>
                        <Text style={styles.agendaSubTitleHours}>Horários</Text>
                        <View style={styles.horarios}>
                            <Text style={[styles.horario, {backgroundColor: '#ff00009a'}]}>09:30</Text>
                            <Text style={[styles.horario, {backgroundColor: '#00ff009a'}]}>11:30</Text>
                            <Text style={[styles.horario, {backgroundColor: '#ccc'}]}>15:30</Text>
                            <Text style={[styles.horario, {backgroundColor: '#ccc'}]}>16:45</Text>
                        </View>
                        <Text style={styles.agendaSubTitleHours}>Solicitar serviço</Text>
                        <TextInput
                            style={styles.description}
                            placeholder="Insira a descrição do serviço"
                            multiline={true}
                            numberOfLines={4}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonRed} onPress={() => setIsModalVisible(false)}>
                                <Text>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonGreen} onPress={() => setIsModalVisible(false)}>
                                <Text>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    agenda: {
        padding: 20,
        backgroundColor: '#fff',
    },
    agendaTitle: {
        fontSize: 25,
        color: '#222',
        fontWeight: '600',
        marginBottom: 2,
        textAlign: 'center',
    },
    agendaSubTitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
        textAlign: 'center',
    },
    calendar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    calendarDay: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dayOfWeek: {
        backgroundColor: '#1333cd',
        padding: 10,
        color: '#fff',
        alignItems: 'center',
    },
    legend: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    legendColor: {
        height: 15,
        width: 15,
        borderRadius: 100,
        marginRight: 10,
    },
    legendText: {
        fontSize: 14,
        fontWeight: '500',
        marginRight: 10,
    },
    horarios: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    horario: {
        fontSize: 14,
        borderRadius: 10,
        fontWeight: '500',
        padding: 5,
        marginRight: 10
    },
    dayNumber: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    marcacaoCin: {
        backgroundColor: '#778899',
        borderRadius: 12,
        padding: 6,
    },
    marcacaoVer: {
        backgroundColor: '#ff00009a',
        borderRadius: 12,
        padding: 6,
    },
    marcacaoVerde: {
        backgroundColor: '#00ff009a',
        borderRadius: 12,
        padding: 6,
    },
    calendarRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    day: {
        backgroundColor: '#f1f1f1',
        padding: 10,
        width: '14.28%', // Distribute days evenly in 7 columns
        justifyContent: 'center',
        alignItems: 'center',
    },
    monthNavigation: {
        flexDirection: 'row', // Adicione esta linha para alinhar os elementos horizontalmente
        alignItems: 'center', // Isso alinhará verticalmente os elementos na linha
        justifyContent: 'center', // Isso centralizará os elementos horizontalmente na linha
        marginBottom: 25,
    },
    navigationText: {
        fontSize: 25,
    },
    mesAno: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    description: {
        borderWidth: 2,
        borderColor: 'transparent',
        transitionProperty: 'borderColor, boxShadow',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        width: '100%',
        padding: 12,
        marginVertical: 8,
        boxSizing: 'border-box',
        height: 180,
        backgroundColor: '#f3f3fd',
        borderRadius: 10,
    },
    agendaSubTitleHours: {
        fontSize: 20,
        color: '#222',
        fontWeight: '600',
        marginBottom: 2,
        textAlign: 'center',
    },
    dataDia: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 5,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 0,
        justifyContent: 'space-around',
    },
    buttonGreen: {
        backgroundColor: '#00ff009a',
        borderRadius: 12,
        color: '#000',
        borderWidth: 0,
        padding: 10,
        fontSize: 15,
        fontWeight: '700',
    },
    buttonRed: {
        backgroundColor: '#ff00009a',
        borderRadius: 12,
        color: '#000',
        borderWidth: 0,
        padding: 10,
        fontSize: 15,
        fontWeight: '700',
    },
});