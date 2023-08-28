import React, {useEffect, useState} from 'react';
import {
    BackHandler,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';

export default function Agenda({navigation}) {
    return (
            <ScrollView style={styles.container}>
                <View style={styles.agenda}>
                    <Text style={styles.agendaTitle}>Agenda</Text>

                    <Text style={styles.mesAno}>Janeiro 2023</Text>
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
                        <View style={styles.day}>
                            <Text style={styles.dayNumber}>1</Text>
                        </View>
                        <View style={styles.day}>
                            <Text style={styles.dayNumber}>1</Text>
                        </View>
                        <View style={styles.day}>
                            <Text style={styles.dayNumber}>1</Text>
                        </View>
                        <View style={styles.day}>
                            <Text style={styles.dayNumber}>1</Text>
                        </View>
                        <View style={styles.day}>
                            <Text style={styles.dayNumber}>1</Text>
                        </View>
                        <View style={styles.day}>
                            <Text style={styles.dayNumber}>1</Text>
                        </View>
                        <View style={styles.day}>
                            <Text style={styles.dayNumber}>1</Text>
                        </View>
                        <View style={styles.day}>
                            <Text style={styles.dayNumber}>1</Text>
                        </View>
                    </View>
                    <View style={styles.legend}>
                        <View style={[styles.legendColor, { backgroundColor: '#ff00009a' }]} />
                        <Text style={styles.legendText}>Ocupado</Text>
                        <View style={[styles.legendColor, { backgroundColor: '#00ff009a' }]} />
                        <Text style={styles.legendText}>Selecionado</Text>
                    </View>
                    <Text style={styles.agendaTitle}>Horários</Text>
                    <View style={styles.horarios}>
                        <Text style={[styles.horario, { backgroundColor: '#ff00009a' }]}>09:30</Text>
                        <Text style={[styles.horario, { backgroundColor: '#00ff009a' }]}>11:30</Text>
                        <Text style={[styles.horario, { backgroundColor: '#ccc' }]}>15:30</Text>
                        <Text style={[styles.horario, { backgroundColor: '#ccc' }]}>16:45</Text>
                    </View>
                </View>
            </ScrollView>
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
        flex: 1,
        backgroundColor: '#778899',
        padding: 10,
        alignItems: 'center',
    },
    day: {
        backgroundColor: '#f1f1f1',
        padding: 10,
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
        margin: 0,
    },
    horarios: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    horario: {
        fontSize: 14,
        borderRadius: 10,
        fontWeight: '500',
        padding: 5,
    },
    dayNumber: {
        fontWeight: 'bold',
        fontSize: 16,
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
    mesAno: {
        fontWeight: '700',
        marginBottom: 10,
        textAlign: 'center',
    },
});