import { Request, Response, NextFunction } from 'express';
import * as appointmentService from '../services/appointment-service';

export const getAppointmentDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    // console.log('ID:=======>', id);
    const data = await appointmentService.getAppointmentDetails(Number(id));
    // console.log('Controller data:=======>', data);
    return res.status(res.statusCode).json(data);
  } catch (error) {
    return next(error);
  }
};

export const getAllAppointmentDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // console.log("Limit :============>", req.body.limit);
    // console.log("offset :============>", req.body.offset);
    // console.log("keyword :============>", req.body.keyword);
    // console.log("filters :============>", req.body.filters);

    const payload = req.body;

    // console.log('Controller req body:=======>', req.body);
    // console.log('Controller payload:=======>', payload);

    const data = await appointmentService.getAllAppointmentDetails(payload);
    console.log('Controller data:=======>', data);
    return res.status(res.statusCode).json(data);
  } catch (error) {
    return next(error);
  }
};

export const createAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // console.log("Limit :============>", req.body.limit);
    // console.log("offset :============>", req.body.offset);
    // console.log("keyword :============>", req.body.keyword);
    // console.log("filters :============>", req.body.filters);

    const payload = req.body;

    // console.log('Controller req body:=======>', req.body);
    console.log('Controller payload:=======>', payload);

    const data = await appointmentService.createAppointment(payload);
    console.log('Controller data:=======>', data);
    return res.status(res.statusCode).json(data);
  } catch (error) {
    return next(error);
  }
};