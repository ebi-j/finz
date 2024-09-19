import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { CreateProjectHandler } from '../common/command/project/handler/CreateProjectHandler';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from '../common/entity';
import { GetProjectsHandler } from '../common/query/project/handler/GetProjectsHandler';
import { TableEntity } from '../common/entity/table.entity';

const commandHandlers = [CreateProjectHandler];
const queryHandlers = [GetProjectsHandler];

@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([ProjectEntity, TableEntity])],
	providers: [ProjectsService, ...commandHandlers, ...queryHandlers],
	controllers: [ProjectsController],
})
export class ProjectsModule {}
