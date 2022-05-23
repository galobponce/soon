import { SignalData } from "simple-peer";

export interface IChildrenProps {
  children: JSX.Element | JSX.Element[];
};

export interface videoRef { 
  srcObject: MediaStream 
};

export interface ICall {
  isReceivingCall: boolean;
  from: any;
  name: any;
  data: SignalData;
}