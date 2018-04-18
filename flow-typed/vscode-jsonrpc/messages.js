/**
 * Flowtype definitions for messages
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.2.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */
declare module 'vscode-jsonrpc/lib/messages' {
  /**
   * A language server message
   */
  declare export interface Message {
    jsonrpc: string;
  }
  /**
   * Request message
   */
  declare export type RequestMessage = {
    /**
     * The request id.
     */
    id: number | string,

    /**
     * The method to be invoked.
     */
    method: string,

    /**
     * The method's params.
     */
    params?: any,
  } & Message;

  declare var ParseError: number;

  declare var InvalidRequest: number;

  declare var MethodNotFound: number;

  declare var InvalidParams: number;

  declare var InternalError: number;

  declare var serverErrorStart: number;

  declare var serverErrorEnd: number;

  declare var ServerNotInitialized: number;

  declare var UnknownErrorCode: number;

  declare var RequestCancelled: number;

  declare var MessageWriteError: number;

  declare var MessageReadError: number;
  declare export interface ResponseErrorLiteral<D> {
    /**
     * A number indicating the error type that occured.
     */
    code: number;

    /**
     * A string providing a short decription of the error.
     */
    message: string;

    /**
     * A Primitive or Structured value that contains additional
     * information about the error. Can be omitted.
     */
    data?: D;
  }
  /**
   * A error object return in a response in case a request
   * has failed.
   */
  declare export class ResponseError<D> {
    code: number;
    data: D;
    constructor(code: number, message: string, data?: D): this;
    toJson(): ResponseErrorLiteral<D>;
  }
  /**
   * A response message.
   */
  declare export type ResponseMessage = {
    /**
     * The request id.
     */
    id: number | string | null,

    /**
     * The result of a request. This can be omitted in
     * the case of an error.
     */
    result?: any,

    /**
     * The error object in case a request fails.
     */
    error?: ResponseErrorLiteral<any>,
  } & Message;

  /**
   * An interface to type messages.
   */
  declare export interface MessageType {
    method: string;
    numberOfParams: number;
  }
  /**
   * An abstract implementation of a MessageType.
   */
  declare export class AbstractMessageType {
    constructor(_method: string, _numberOfParams: number): this;
    method: string;
    numberOfParams: number;
  }
  /**
   * End marker interface for request and notification types.
   */
  declare export interface _EM {
    _$endMarker$_: number;
  }
  /**
   * Classes to type request response pairs
   */
  declare export class RequestType0<R, E, RO> {
    _: [R, E, RO, _EM];
    constructor(method: string): this;
  }
  declare export class RequestType<P, R, E, RO> {
    _: [P, R, E, RO, _EM];
    constructor(method: string): this;
  }
  declare export class RequestType1<P1, R, E, RO> {
    _: [P1, R, E, RO, _EM];
    constructor(method: string): this;
  }
  declare export class RequestType2<P1, P2, R, E, RO> {
    _: [P1, P2, R, E, RO, _EM];
    constructor(method: string): this;
  }
  declare export class RequestType3<P1, P2, P3, R, E, RO> {
    _: [P1, P2, P3, R, E, RO, _EM];
    constructor(method: string): this;
  }
  declare export class RequestType4<P1, P2, P3, P4, R, E, RO> {
    _: [P1, P2, P3, P4, R, E, RO, _EM];
    constructor(method: string): this;
  }
  declare export class RequestType5<P1, P2, P3, P4, P5, R, E, RO> {
    _: [P1, P2, P3, P4, P5, R, E, RO, _EM];
    constructor(method: string): this;
  }
  declare export class RequestType6<P1, P2, P3, P4, P5, P6, R, E, RO> {
    _: [P1, P2, P3, P4, P5, P6, R, E, RO, _EM];
    constructor(method: string): this;
  }
  declare export class RequestType7<P1, P2, P3, P4, P5, P6, P7, R, E, RO> {
    _: [P1, P2, P3, P4, P5, P6, P7, R, E, RO, _EM];
    constructor(method: string): this;
  }
  declare export class RequestType8<P1, P2, P3, P4, P5, P6, P7, P8, R, E, RO> {
    _: [P1, P2, P3, P4, P5, P6, P7, P8, R, E, RO, _EM];
    constructor(method: string): this;
  }
  declare export class RequestType9<
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    P7,
    P8,
    P9,
    R,
    E,
    RO,
  > {
    _: [P1, P2, P3, P4, P5, P6, P7, P8, P9, R, E, RO, _EM];
    constructor(method: string): this;
  }
  /**
   * Notification Message
   */
  declare export type NotificationMessage = {
    /**
     * The method to be invoked.
     */
    method: string,

    /**
     * The notification's params.
     */
    params?: any,
  } & Message;
  declare export class NotificationType<P, RO> {
    _: [P, RO, _EM];
    constructor(method: string): this;
  }
  declare export class NotificationType0<RO> {
    _: [RO, _EM];
    constructor(method: string): this;
  }
  declare export class NotificationType1<P1, RO> {
    _: [P1, RO, _EM];
    constructor(method: string): this;
  }
  declare export class NotificationType2<P1, P2, RO> {
    _: [P1, P2, RO, _EM];
    constructor(method: string): this;
  }
  declare export class NotificationType3<P1, P2, P3, RO> {
    _: [P1, P2, P3, RO, _EM];
    constructor(method: string): this;
  }
  declare export class NotificationType4<P1, P2, P3, P4, RO> {
    _: [P1, P2, P3, P4, RO, _EM];
    constructor(method: string): this;
  }
  declare export class NotificationType5<P1, P2, P3, P4, P5, RO> {
    _: [P1, P2, P3, P4, P5, RO, _EM];
    constructor(method: string): this;
  }
  declare export class NotificationType6<P1, P2, P3, P4, P5, P6, RO> {
    _: [P1, P2, P3, P4, P5, P6, RO, _EM];
    constructor(method: string): this;
  }
  declare export class NotificationType7<P1, P2, P3, P4, P5, P6, P7, RO> {
    _: [P1, P2, P3, P4, P5, P6, P7, RO, _EM];
    constructor(method: string): this;
  }
  declare export class NotificationType8<P1, P2, P3, P4, P5, P6, P7, P8, RO> {
    _: [P1, P2, P3, P4, P5, P6, P7, P8, RO, _EM];
    constructor(method: string): this;
  }
  declare export class NotificationType9<
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    P7,
    P8,
    P9,
    RO,
  > {
    _: [P1, P2, P3, P4, P5, P6, P7, P8, P9, RO, _EM];
    constructor(method: string): this;
  }
  /**
   * Tests if the given message is a request message
   */
  declare export function isRequestMessage(
    message: Message | void,
  ): RequestMessage;
  /**
   * Tests if the given message is a notification message
   */
  declare export function isNotificationMessage(
    message: Message | void,
  ): NotificationMessage;
  /**
   * Tests if the given message is a response message
   */
  declare export function isResponseMessage(
    message: Message | void,
  ): ResponseMessage;
}