interface iAddress {
    email: string;
    name: string;
}

export interface IMessage{
    to: iAddress;
    from: iAddress;
    subject: string;
    body: string;
}

export interface IMailProvider {
    sendMail(message: IMessage): Promise<void>
}