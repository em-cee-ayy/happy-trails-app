import { AuthProvider, useAuth } from "./context/AuthContext";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep splash screen until fonts load */}
      {!loaded && <Stack.Screen options={{ headerShown: false }} />}
      {loaded && (
        <AuthProvider>
          <RootLayoutNav />
        </AuthProvider>
      )}
    </>
  );
}

function RootLayoutNav() {
  const { user, isLoading } = useAuth();
  // Treat segments as strings for comparison
  const segments = useSegments() as unknown as string[];
  const router = useRouter();
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      // @ts-ignore: bypass route string union mismatch
      router.replace("/(auth)/login");
    } else if (user && inAuthGroup) {
      // @ts-ignore: bypass route string union mismatch
      router.replace("/(tabs)");
    }
  }, [user, isLoading, segments, router]);

  if (isLoading) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
