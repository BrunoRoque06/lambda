from src.AutomatedMouseKeyboardRoutine import AutomatedMouseKeyboardRoutine

timeInSecondsBetweenEvents = 1
numberOfTimesToRepeatRoutine = 2

automatedGuiRoutine = AutomatedMouseKeyboardRoutine(timeInSecondsBetweenEvents, numberOfTimesToRepeatRoutine)
automatedGuiRoutine.Process()