def on_ir_callbackuser(message):
    pass
IR.IR_callbackUser(on_ir_callbackuser)

makerbit.connect_ir_receiver(DigitalPin.P16, IrProtocol.KEYESTUDIO)

def on_forever():
    pass
basic.forever(on_forever)
