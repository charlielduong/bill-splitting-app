import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type ContainerProps = {
    children: ReactNode;
    style?: ViewStyle;
    padding?: number;
    center?: boolean;
    safeArea?: boolean;
};

export default function Container({
    children,
    style,
    padding = 20,
    center = true,
    safeArea = false,
}: ContainerProps){
    return(
        <View style={[ styles.container, center && styles.centered, { padding }, style ]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centered: {
        // justifyContent: 'center',
        alignItems: 'center',
    },
});
