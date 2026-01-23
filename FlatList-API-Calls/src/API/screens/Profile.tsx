import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { updateProfile } from '../../redux/profileSlice';

function Profile() {
    const navigation = useNavigation();
    const dispatch = useDispatch<AppDispatch>();
    const { name, email } = useSelector((state: RootState) => state.profile);

    const [isEditModalVisible, setIsEditModalVisible] = React.useState(false);
    const [editName, setEditName] = React.useState(name);
    const [editEmail, setEditEmail] = React.useState(email);

    const handleSaveProfile = () => {
        dispatch(updateProfile({ name: editName, email: editEmail }));
        setIsEditModalVisible(false);
    };

    const handleOpenModal = () => {
        setEditName(name);
        setEditEmail(email);
        setIsEditModalVisible(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.profileHeader}>
                        <View style={styles.avatarContainer}>
                            <Text style={styles.avatar}>👤</Text>
                        </View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.email}>{email}</Text>
                    </View>

                    <View style={styles.infoSection}>
                        <View style={styles.infoItem}>
                            <Text style={styles.label}>Phone:</Text>
                            <Text style={styles.value}>+1 (555) 123-4567</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.label}>Location:</Text>
                            <Text style={styles.value}>San Francisco, CA</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.label}>Member Since:</Text>
                            <Text style={styles.value}>January 2024</Text>
                        </View>
                    </View>

                    <View style={styles.statsSection}>
                        <View style={styles.statCard}>
                            <Text style={styles.statNumber}>42</Text>
                            <Text style={styles.statLabel}>Completed Tasks</Text>
                        </View>
                        <View style={styles.statCard}>
                            <Text style={styles.statNumber}>15</Text>
                            <Text style={styles.statLabel}>In Progress</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={() => (navigation as any).navigate('DetailsScreen')}
                    >
                        <Text style={styles.detailsButtonText}>View Full Details →</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={handleOpenModal}
                    >
                        <Text style={styles.editButtonText}>Edit Profile ✏️</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal
                visible={isEditModalVisible}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Edit Profile</Text>

                        <Text style={styles.inputLabel}>Name</Text>
                        <TextInput
                            style={styles.input}
                            value={editName}
                            onChangeText={setEditName}
                            placeholder="Enter your name"
                        />

                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={editEmail}
                            onChangeText={setEditEmail}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                        />

                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={() => setIsEditModalVisible(false)}
                            >
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.saveButton]}
                                onPress={handleSaveProfile}
                            >
                                <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    avatar: {
        fontSize: 40,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    email: {
        fontSize: 14,
        color: '#666',
    },
    infoSection: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    infoItem: {
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666',
    },
    value: {
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
    },
    statsSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    statNumber: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2196F3',
        marginBottom: 5,
    },
    statLabel: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    detailsButton: {
        backgroundColor: '#2196F3',
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    detailsButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    editButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    editButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        paddingBottom: 30,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666',
        marginBottom: 8,
        marginTop: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        color: '#333',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 25,
    },
    modalButton: {
        flex: 1,
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#f0f0f0',
    },
    cancelButtonText: {
        color: '#666',
        fontSize: 16,
        fontWeight: '600',
    },
    saveButton: {
        backgroundColor: '#2196F3',
    },
    saveButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});
