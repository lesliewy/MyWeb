'use strict';
define(['angular', 'angularMocks'], function(angular, ngMock) {
   describe('PoemData', function() {
      var $httpBackend;
      var PoemData;
      var PoemDataResult = [
         { name: 'Phone X' },
         { name: 'Phone Y' },
         { name: 'Phone Z' }
      ];

      // Add a custom equality tester before each test
      beforeEach(function() {
         jasmine.addCustomEqualityTester(angular.equals);
      });

      // Load the module that contains the `Phone` service before each test
      // module 在 angular-mocks中
      beforeEach(module('core.poem.module'));

      // Instantiate the service and "train" `$httpBackend` before each test
      beforeEach(inject(function(_$httpBackend_, _PoemData_) {
         $httpBackend = _$httpBackend_;
         $httpBackend.expectGET('scripts/poem/data/searchType.json').respond(PoemDataResult);

         PoemData = _PoemData_;
      }));

      // Verify that there are no outstanding expectations or requests after each test
      afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
      });
      it('should fetch the poem data from `scripts/poem/data/searchType.json`', function() {
         var result = PoemData.query();

         expect(result).toEqual([]);

         // $httpBackend.flush();
         // expect(result).toEqual(PoemData);
      });
   });
})
