import { StyleSheet } from "react-native";

export const calendarStyles = StyleSheet.create({
  container: {
    width: "100%", // ✅ IMPORTANT: library-safe
  },

  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  yearBadge: {
    alignItems: "center",
    marginBottom: 32,
  },

  eraLabel: {
    color: "#f97316",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 4,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  yearText: {
    color: "#333",
    fontSize: 80,
    fontWeight: "200",
    letterSpacing: -2,
  },

  content: {
    width: "100%", // ✅ adapts to parent
    backgroundColor: "#1a1a24",
    borderRadius: 16,
    padding: 16,
  },

  contentPlaceholder: {
    color: "#6b7280",
    fontSize: 12,
    fontFamily: "monospace",
  },
});
