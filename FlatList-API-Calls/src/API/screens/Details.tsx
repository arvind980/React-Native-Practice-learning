import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function Details() {
    const navigation = useNavigation();
    const { name, email } = useSelector((state: RootState) => state.profile);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Text style={styles.backButtonText}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile Details</Text>
                <View style={{ width: 60 }} />
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.detailCard}>
                    <Text style={styles.sectionTitle}>Account Information</Text>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Full Name:</Text>
                        <Text style={styles.detailValue}>{name}</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Email:</Text>
                        <Text style={styles.detailValue}>{email}</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Phone:</Text>
                        <Text style={styles.detailValue}>+1 (555) 123-4567</Text>
                    </View>
                </View>

                <View style={styles.detailCard}>
                    <Text style={styles.sectionTitle}>Address Details</Text>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Street:</Text>
                        <Text style={styles.detailValue}>123 Main Street</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>City:</Text>
                        <Text style={styles.detailValue}>San Francisco</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>State:</Text>
                        <Text style={styles.detailValue}>California</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Zip Code:</Text>
                        <Text style={styles.detailValue}>94102</Text>
                    </View>
                </View>

                <View style={styles.detailCard}>
                    <Text style={styles.sectionTitle}>Account Activity</Text>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Member Since:</Text>
                        <Text style={styles.detailValue}>January 15, 2024</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Last Login:</Text>
                        <Text style={styles.detailValue}>Today at 10:30 AM</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Account Status:</Text>
                        <Text style={[styles.detailValue, { color: '#4CAF50' }]}>Active</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2196F3',
        paddingHorizontal: 15,
        paddingVertical: 12,
    },
    backButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    backButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        padding: 15,
    },
    detailCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2196F3',
        marginBottom: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    detailItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    detailLabel: {
        fontSize: 13,
        fontWeight: '600',
        color: '#666',
        flex: 1,
    },
    detailValue: {
        fontSize: 13,
        color: '#333',
        fontWeight: '500',
        flex: 1.2,
        textAlign: 'right',
    },
});
