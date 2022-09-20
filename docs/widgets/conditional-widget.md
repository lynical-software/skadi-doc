---
sidebar_position: 1
---

# ConditionalWidget

Build a widget based on a boolean condition.

```dart
    ConditionalWidget(
        margin: EdgeInsets.all(8), //optional
        padding: EdgeInsets.all(8), //optional
        condition: false,
        onTrue: () => const Text("Show when true"),
        onFalse: () => const Text("Show when false"),
    ),
```