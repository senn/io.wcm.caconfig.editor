/*
 * #%L
 * wcm.io
 * %%
 * Copyright (C) 2016 wcm.io
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
(function (angular) {
  "use strict";

  angular.module("io.wcm.caconfig.modals")
    .controller("SaveConfigController", SaveConfigController);

  SaveConfigController.$inject = ["$rootScope", "modalService", "configService"];

  function SaveConfigController($rootScope, modalService, configService) {
    var that = this;

    modalService.addModal(modalService.modal.SAVE_CONFIG, {
      element: "#caconfig-saveConfigModal",
      type: "notice",
      visible: false
    });

    that.saveConfigWithRedirect = function () {
      configService.saveCurrentConfig()
        .then(function () {
          $rootScope.goToRedirectUrl();
        });
    };
  }
}(angular));
