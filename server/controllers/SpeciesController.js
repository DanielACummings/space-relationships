import express from "express";
import speciesService from "../services/SpeciesService";

export default class SpeciesController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await speciesService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await speciesService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await speciesService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await speciesService.edit(req.params.id, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await speciesService.delete(req.params.id)
      return res.send('Successfully Deleted')
    } catch (error) {
      next(error)
    }
  }
}