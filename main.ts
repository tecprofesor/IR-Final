input.onButtonPressed(Button.A, function () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    strip.showColor(neopixel.hsl(0, 0, 0))
})
IR.IR_callbackUser(function (message) {
    basic.showNumber(makerbit.irButton())
})
input.onSound(DetectedSound.Loud, function () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    strip.showColor(neopixel.hsl(0, 0, 0))
})
let B = 0
let G = 0
let R = 0
let strip: neopixel.Strip = null
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.Keyestudio)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
input.setSoundThreshold(SoundThreshold.Loud, 43)
let Velocidad = 50
basic.forever(function () {
    while (makerbit.irButton() == 184) {
        Velocidad = 50
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    }
    while (makerbit.irButton() == 40) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
        Velocidad += 30
        basic.showNumber(Velocidad)
    }
    while (makerbit.irButton() == 24) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
        Velocidad += -30
        basic.showNumber(Velocidad)
    }
    while (makerbit.irButton() == 162) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    }
    while (makerbit.irButton() == 66) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorStop(maqueen.Motors.M2)
    }
    while (makerbit.irButton() == 2) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    }
    while (makerbit.irButton() == 130) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorStop(maqueen.Motors.M2)
    }
    while (makerbit.irButton() == 112) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorStop(maqueen.Motors.M2)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        basic.pause(10000)
    }
})
basic.forever(function () {
    while (makerbit.irButton() == 152) {
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }
    while (makerbit.irButton() == 8) {
        basic.clearScreen()
        basic.showIcon(IconNames.Ghost)
    }
    while (makerbit.irButton() == 136) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    }
    while (makerbit.irButton() == 72) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    }
})
basic.forever(function () {
    while (makerbit.irButton() == 18) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    while (makerbit.irButton() == 146) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    while (makerbit.irButton() == 82) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    while (makerbit.irButton() == 50) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    while (makerbit.irButton() == 202) {
        strip.showColor(neopixel.hsl(0, 0, 0))
    }
    while (makerbit.irButton() == 10) {
        strip.showRainbow(1, 360)
    }
    while (makerbit.irButton() == 74) {
        R = 0
        G = 0
        B = 255
        for (let index = 0; index < 255; index++) {
            R += 1
            B += -1
            strip.showColor(neopixel.rgb(R, G, B))
            basic.pause(10)
        }
        for (let index = 0; index < 255; index++) {
            G += 1
            R += -1
            strip.showColor(neopixel.rgb(R, G, B))
            basic.pause(10)
        }
        for (let index = 0; index < 255; index++) {
            B += 1
            G += -1
            strip.showColor(neopixel.rgb(R, G, B))
            basic.pause(10)
        }
    }
})
