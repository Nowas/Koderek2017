import { ClassService } from "../services/ClassService";

let assert = require('assert');
let expect = require('chai').expect;

describe('ClassService tests', function () {

    beforeEach(function () {
    });

    it('Dummy test', function (done) {
        assert( new ClassService().DummyMethode(), "Dummy test passing");
        done();
    })
})