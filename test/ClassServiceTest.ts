import { ClassService } from "../services/ClassService";
import { ClassFilter } from "../services/Models/ClassFilter";
import { ClassScoreEnum } from "../services/Models/IClassScoreModel";

let assert = require('assert');
let expect = require('chai').expect;

describe('ClassService tests', function () {

    beforeEach(function () {
    });

    it('get class info test', function(done){
        var srv = new ClassService();
        var cl = srv.GetClass("T.1");
        assert(cl!=null, 'got class');
        done();
    })

    it('get no class info test', function(done){
        var srv = new ClassService();
        var cl = srv.GetClass(null);
        assert(cl==null, 'got class');
        done();
    })
    it('get no class info test for wrong id', function(done){
        var srv = new ClassService();
        var cl = srv.GetClass("T.000");
        assert(cl==null, 'got class');
        done();
    })
    it('get classes with filter test', function(done){
        var srv = new ClassService();
        var cl = srv.GetClasses(new ClassFilter("name1"));
        assert(cl && cl.length > 0, 'got class');
        done();
    })
    it('get classes with filter test no return', function(done){
        var srv = new ClassService();
        var cl = srv.GetClasses(new ClassFilter("name11"));
        assert(cl && cl.length == 0, 'got class');
        done();
    })
    it('get classes score', function(done){
        var srv = new ClassService();
        var cl = srv.GetScoreForClass("T.1");
        assert(cl[0] == 1, 'got score Below');
        assert(cl[1] == 2, 'got score AsExpected');
        assert(cl[2] == 2, 'got score Above');
        done();
    })
    it('get classes score insert', function(done){
        var srv = new ClassService();
        var cl = srv.GetScoreForClass("T.3");
        assert(cl[0] == 0, 'got score Below');
        assert(cl[1] == 0, 'got score AsExpected');
        assert(cl[2] == 0, 'got score Above');

        srv.SetScore("T.3", ClassScoreEnum.AsExpected);

        var cl2 = srv.GetScoreForClass("T.3");
        assert(cl2[0] == 0, 'got score Below');
        assert(cl2[1] == 1, 'got score AsExpected');
        assert(cl2[2] == 0, 'got score Above');
        done();
    })
    it('add class test', function(done){
        var srv = new ClassService();
        var cl = srv.GetClass("T.99");
        assert(!cl , 'got class, but shouldnt');
        srv.AddClass("T.99", "name99", new Date("2017.03.09"), new Date("2017.03.10"), "teacher99");
        var cl2 = srv.GetClass("T.99");
        assert(cl2 , 'got no class');
        done();
    })
    it('new class multiple score insert', function(done){
        var srv = new ClassService();

        srv.AddClass("T.88", "name88", new Date("2017.03.09"), new Date("2017.03.10"), "teacher88");
        
        var cl = srv.GetScoreForClass("T.88");
        assert(cl[0] == 0, 'got score Below');
        assert(cl[1] == 0, 'got score AsExpected');
        assert(cl[2] == 0, 'got score Above');

        srv.SetScore("T.88", ClassScoreEnum.AsExpected);
        srv.SetScore("T.88", ClassScoreEnum.AsExpected);
        srv.SetScore("T.88", ClassScoreEnum.AsExpected);
        srv.SetScore("T.88", ClassScoreEnum.AboveExpectation);
        srv.SetScore("T.88", ClassScoreEnum.AboveExpectation);
        srv.SetScore("T.88", ClassScoreEnum.BelowExpectation);

        var cl2 = srv.GetScoreForClass("T.88");
        assert(cl2[0] == 1, 'got score Below');
        assert(cl2[1] == 3, 'got score AsExpected');
        assert(cl2[2] == 2, 'got score Above');
        done();
    })
    it('nonexistent class score get', function(done){
        var srv = new ClassService();

        var cl = srv.GetScoreForClass("T.88");
        assert(cl[0] == 0, 'got score Below');
        assert(cl[1] == 0, 'got score AsExpected');
        assert(cl[2] == 0, 'got score Above');
        done();
    })
    it('nonexistent class score insert', function(done){
        var srv = new ClassService();

        srv.SetScore("T.88", ClassScoreEnum.AsExpected);

        var cl = srv.GetScoreForClass("T.88");
        assert(cl[0] == 0, 'got score Below');
        assert(cl[1] == 0, 'got score AsExpected');
        assert(cl[2] == 0, 'got score Above');
        done();
    })
})