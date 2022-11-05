makerbit.connectUltrasonicDistanceSensor(DigitalPin.P1, DigitalPin.P0)
rekabit.setServoPosition(ServoChannel.S1, 90)
rekabit.setRgbBrightness(200)
basic.forever(function () {
    if (makerbit.isUltrasonicDistanceLessThan(10, DistanceUnit.CM)) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.pause(100)
        rekabit.setServoPosition(ServoChannel.S1, 20)
        basic.pause(100)
        rekabit.runMotor(MotorChannel.All, MotorDirection.Forward, 255)
        basic.pause(100)
        rekabit.setAllRgbPixelsColor(0x00ffff)
        basic.pause(6000)
    } else {
        rekabit.setServoPosition(ServoChannel.S1, 90)
        basic.pause(100)
        rekabit.setAllRgbPixelsColor(0xff0000)
        basic.pause(100)
        rekabit.brakeMotor(MotorChannel.All)
    }
})
