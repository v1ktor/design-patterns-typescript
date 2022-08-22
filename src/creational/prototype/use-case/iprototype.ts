import { Document } from "./document";

export interface IProtoType {
  clone(mode: number): Document
}
