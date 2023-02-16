\c gila_software_test;

insert into message_category (id, description)
values
  (
    '748f11b0-204e-4437-87be-0df0d49cb5e6',
    'Sports'
  ),
  (
    'b8da44ed-07bd-4ea8-b655-7ccf9157eb6c',
    'Finance'
  ),
  (
    '1658a017-f52d-423f-896b-637cc273315b',
    'Movies'
  );

insert into notification_type (id, description)
values
  (
    'e433d143-09a5-45f2-809e-2f248117e609',
    'SMS'
  ),
  (
    'e22e7abb-5dbb-4180-8a3b-a77c70ee18ce',
    'E-Mail'
  ),
  (
    'f532253f-f56c-4cb9-82d8-3a25aab60816',
    'Push Notification'
  );

insert into "user" (id, name, email, "phoneNumber")
values
  (
    'b6efdb38-8547-4bce-befa-e41db21bc04e',
    'Test User 1', 'test@user.1.com',
    '555444333'
  ),
  (
    '1ed3d462-6fd8-45b7-8570-246c06c1eb1e',
    'Test User 2', 'test@user.2.com',
    '555333222'
  ),
  (
    '4c9fc6b5-3187-467c-80af-efa880a83fdf',
    'Test User 3', 'test@user.3.com',
    '555222111'
  );

insert into user_subscribed_categories_message_category ("userId", "messageCategoryId")
values
  (
    'b6efdb38-8547-4bce-befa-e41db21bc04e',
    '748f11b0-204e-4437-87be-0df0d49cb5e6'
  ),
  (
    '1ed3d462-6fd8-45b7-8570-246c06c1eb1e',
    'b8da44ed-07bd-4ea8-b655-7ccf9157eb6c'
  ),
  (
    '1ed3d462-6fd8-45b7-8570-246c06c1eb1e',
    '1658a017-f52d-423f-896b-637cc273315b'
  ),
  (
    '4c9fc6b5-3187-467c-80af-efa880a83fdf',
    '748f11b0-204e-4437-87be-0df0d49cb5e6'
  ),
  (
    '4c9fc6b5-3187-467c-80af-efa880a83fdf',
    'b8da44ed-07bd-4ea8-b655-7ccf9157eb6c'
  ),
  (
    '4c9fc6b5-3187-467c-80af-efa880a83fdf',
    '1658a017-f52d-423f-896b-637cc273315b'
  );

insert into user_subscribed_channels_notification_type ("userId", "notificationTypeId")
values
  (
    'b6efdb38-8547-4bce-befa-e41db21bc04e',
    'e433d143-09a5-45f2-809e-2f248117e609'
  ),
  (
    '1ed3d462-6fd8-45b7-8570-246c06c1eb1e',
    'e22e7abb-5dbb-4180-8a3b-a77c70ee18ce'
  ),
  (
    '1ed3d462-6fd8-45b7-8570-246c06c1eb1e',
    'f532253f-f56c-4cb9-82d8-3a25aab60816'
  ),
  (
    '4c9fc6b5-3187-467c-80af-efa880a83fdf',
    'e433d143-09a5-45f2-809e-2f248117e609'
  ),
  (
    '4c9fc6b5-3187-467c-80af-efa880a83fdf',
    'e22e7abb-5dbb-4180-8a3b-a77c70ee18ce'
  ),
  (
    '4c9fc6b5-3187-467c-80af-efa880a83fdf',
    'f532253f-f56c-4cb9-82d8-3a25aab60816'
  );
