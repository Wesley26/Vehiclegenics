import { FC } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const Demo:FC = () => {

    const tailwind = useTailwind();

    return (
        <ScrollView style={tailwind('h-full pt-6')}>
            <View style={tailwind('pt-12 items-center')}>
                <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
                    <Text style={tailwind('text-blue-800 font-semibold')}>
                        Hello Demo World! This is sample text.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Demo;