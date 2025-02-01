import {SafeAreaView} from "react-native-safe-area-context";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {

    const handleLogin = () => {

    }

    return (
        <SafeAreaView className="bg-[#1F2D27]">
            <ScrollView contentContainerClassName="h-full flex justify-center gap-64 items-center">
                <Image source={images.logo} className="w-72 h-72" resizeMode="contain"/>
                <View className="px-10">
                    <TouchableOpacity onPress={{handleLogin}}
                                      className="bg-white shadow-sm shadow-zinc-300 rounded-full w-full py-4 px-10 mt-5">
                        <View className="flex flex-row items-center justify-center">
                            <Image source={icons.google} resizeMode="contain" className="h-5 w-5"/>
                            <Text className="text-lg ml-2">Continue with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
