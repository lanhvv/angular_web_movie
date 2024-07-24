import {HttpClient} from "@angular/common/http";
import {ParamAppiModel} from "../models/param-appi.model";
import {HostConstant} from "../utils/host.constant";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class ApiiNguoncService {
  constructor(public httpClient: HttpClient) {
  }

  public getList(param :ParamAppiModel) {
    return this.httpClient.get<any>(
      HostConstant.APPI + "nguonc/danh-sach",
      {
          params: {
            year : param.year,
            type : param.type,
            country : param.country,
            category : param.category,
            page : param.page,
            limit : param.limit,
            search : param.search
          },
          observe: "body"
        }
    );
  }
}
